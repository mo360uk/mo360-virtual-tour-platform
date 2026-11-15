import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowUpRight, Compass, Crosshair } from 'lucide-react';
import type { HotspotLink, RoomNode } from '../types/tourSchema';

export interface Viewer360Props {
  room: RoomNode;
  autoRotate?: boolean;
  fov?: number;
  onFovChange?: (fov: number) => void;
  onSelectHotspot?: (hotspot: HotspotLink) => void;
  onYawChange?: (yaw: number) => void;
  onPlaceHotspot?: (yaw: number, pitch: number) => void;
  placementMode?: boolean;
  className?: string;
}

function sphericalDir(yawDeg: number, pitchDeg: number, radius = 1): THREE.Vector3 {
  const phi = THREE.MathUtils.degToRad(90 - pitchDeg);
  const theta = THREE.MathUtils.degToRad(yawDeg);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.cos(theta)
  );
}

function dirToYawPitch(dir: THREE.Vector3): { yaw: number; pitch: number } {
  const norm = dir.clone().normalize();
  const pitch = THREE.MathUtils.radToDeg(Math.asin(THREE.MathUtils.clamp(norm.y, -1, 1)));
  const yaw = THREE.MathUtils.radToDeg(Math.atan2(norm.x, norm.z));
  return { yaw, pitch };
}

export const Viewer360: React.FC<Viewer360Props> = ({
  room,
  autoRotate = false,
  fov: controlledFov,
  onFovChange,
  onSelectHotspot,
  onYawChange,
  onPlaceHotspot,
  placementMode = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hotspotRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);

  // Mutable animation state kept in refs for 60fps zero-re-render camera loop
  const stateRef = useRef({
    targetYaw: room.initialYaw ?? 0,
    targetPitch: 0,
    currentYaw: room.initialYaw ?? 0,
    currentPitch: 0,
    targetFov: controlledFov ?? 75,
    currentFov: controlledFov ?? 75,
    isDragging: false,
    pointerStartX: 0,
    pointerStartY: 0,
    pointerDownX: 0,
    pointerDownY: 0,
    lastPinchDist: null as number | null,
    autoRotate,
    placementMode,
    hotspots: room.hotspots,
    lastEmittedYaw: room.initialYaw ?? 0,
  });

  const callbacksRef = useRef({
    onYawChange,
    onPlaceHotspot,
    onFovChange,
  });

  useEffect(() => {
    callbacksRef.current = { onYawChange, onPlaceHotspot, onFovChange };
  }, [onYawChange, onPlaceHotspot, onFovChange]);

  useEffect(() => {
    stateRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    stateRef.current.placementMode = placementMode;
  }, [placementMode]);

  useEffect(() => {
    stateRef.current.hotspots = room.hotspots;
  }, [room.hotspots]);

  useEffect(() => {
    if (typeof controlledFov === 'number') {
      stateRef.current.targetFov = THREE.MathUtils.clamp(controlledFov, 35, 95);
    }
  }, [controlledFov]);

  // Three.js scene references
  const threeRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    material: THREE.MeshBasicMaterial;
    textureLoader: THREE.TextureLoader;
    raycaster: THREE.Raycaster;
    currentTexture: THREE.Texture | null;
  } | null>(null);

  // Initialize Three.js WebGL context once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      stateRef.current.currentFov,
      width / height,
      0.1,
      1100
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(500, 64, 40);
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.FrontSide,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const textureLoader = new THREE.TextureLoader();
    const raycaster = new THREE.Raycaster();

    threeRef.current = {
      renderer,
      scene,
      camera,
      material,
      textureLoader,
      raycaster,
      currentTexture: null,
    };

    const handleResize = () => {
      if (!containerRef.current || !threeRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      threeRef.current.camera.aspect = w / h;
      threeRef.current.camera.updateProjectionMatrix();
      threeRef.current.renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    let rafId = 0;
    const lookDir = new THREE.Vector3();
    const projVec = new THREE.Vector3();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const st = stateRef.current;
      const t = threeRef.current;
      if (!t) return;

      if (st.autoRotate && !st.isDragging && !st.placementMode) {
        st.targetYaw += 0.08;
      }

      st.targetPitch = THREE.MathUtils.clamp(st.targetPitch, -82, 82);
      st.targetFov = THREE.MathUtils.clamp(st.targetFov, 35, 95);

      st.currentYaw += (st.targetYaw - st.currentYaw) * 0.14;
      st.currentPitch += (st.targetPitch - st.currentPitch) * 0.14;
      st.currentFov += (st.targetFov - st.currentFov) * 0.16;

      if (Math.abs(t.camera.fov - st.currentFov) > 0.02) {
        t.camera.fov = st.currentFov;
        t.camera.updateProjectionMatrix();
      }

      lookDir.copy(sphericalDir(st.currentYaw, st.currentPitch, 1));
      t.camera.lookAt(lookDir);

      t.renderer.render(t.scene, t.camera);

      // Emit yaw updates for floorplan radar cone
      const normalizedYaw = ((st.currentYaw % 360) + 360) % 360;
      if (Math.abs(normalizedYaw - st.lastEmittedYaw) > 0.35) {
        st.lastEmittedYaw = normalizedYaw;
        callbacksRef.current.onYawChange?.(normalizedYaw);
      }

      // Project 3D hotspot beacons to 2D screen coordinates
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;

      for (const hs of st.hotspots) {
        const el = hotspotRefs.current.get(hs.id);
        if (!el) continue;

        const hsDir = sphericalDir(hs.yaw, hs.pitch, 1);
        const dot = lookDir.dot(hsDir);

        if (dot <= 0.12) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          continue;
        }

        projVec.copy(hsDir).multiplyScalar(450).project(t.camera);
        if (projVec.z >= 1) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          continue;
        }

        const x = (projVec.x * 0.5 + 0.5) * w;
        const y = (-projVec.y * 0.5 + 0.5) * h;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      if (threeRef.current?.currentTexture) {
        threeRef.current.currentTexture.dispose();
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      threeRef.current = null;
    };
  }, []);

  // Load panorama texture with animated zoom + cross-fade transition
  useEffect(() => {
    const t = threeRef.current;
    if (!t) return;

    let cancelled = false;
    const imageUrl = room.panoHighResUrl || room.panoPreviewUrl;

    // Trigger brief zoom-in + cross-fade when switching rooms
    if (t.currentTexture) {
      setIsTransitioning(true);
      stateRef.current.targetFov = 58;
    }

    t.textureLoader.load(
      imageUrl,
      (texture) => {
        if (cancelled) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        const oldTex = t.currentTexture;
        t.material.map = texture;
        t.material.needsUpdate = true;
        t.currentTexture = texture;
        if (oldTex && oldTex !== texture) {
          oldTex.dispose();
        }

        const nextYaw = room.initialYaw ?? 0;
        stateRef.current.targetYaw = nextYaw;
        stateRef.current.currentYaw = nextYaw;
        stateRef.current.targetPitch = 0;
        stateRef.current.currentPitch = 0;
        stateRef.current.targetFov = controlledFov ?? 75;
        stateRef.current.lastEmittedYaw = ((nextYaw % 360) + 360) % 360;
        callbacksRef.current.onYawChange?.(stateRef.current.lastEmittedYaw);

        setTimeout(() => {
          if (!cancelled) setIsTransitioning(false);
        }, 180);
      },
      undefined,
      () => {
        if (!cancelled) setIsTransitioning(false);
      }
    );

    return () => {
      cancelled = true;
    };
  }, [room.id, room.panoHighResUrl, room.panoPreviewUrl, room.initialYaw, controlledFov]);

  // Pointer & Wheel Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button[data-hotspot="true"]')) {
      return;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    stateRef.current.isDragging = true;
    stateRef.current.pointerStartX = e.clientX;
    stateRef.current.pointerStartY = e.clientY;
    stateRef.current.pointerDownX = e.clientX;
    stateRef.current.pointerDownY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stateRef.current.isDragging) return;
    const dx = e.clientX - stateRef.current.pointerStartX;
    const dy = e.clientY - stateRef.current.pointerStartY;
    stateRef.current.pointerStartX = e.clientX;
    stateRef.current.pointerStartY = e.clientY;

    const sensitivity = (stateRef.current.currentFov / 75) * 0.22;
    stateRef.current.targetYaw -= dx * sensitivity;
    stateRef.current.targetPitch = THREE.MathUtils.clamp(
      stateRef.current.targetPitch + dy * sensitivity,
      -82,
      82
    );
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stateRef.current.isDragging) return;
    stateRef.current.isDragging = false;

    const moveDist = Math.hypot(
      e.clientX - stateRef.current.pointerDownX,
      e.clientY - stateRef.current.pointerDownY
    );

    // Click in placement mode -> raycast exact (yaw, pitch)
    if (
      moveDist < 6 &&
      stateRef.current.placementMode &&
      callbacksRef.current.onPlaceHotspot &&
      containerRef.current &&
      threeRef.current
    ) {
      const rect = containerRef.current.getBoundingClientRect();
      const ndc = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      threeRef.current.raycaster.setFromCamera(ndc, threeRef.current.camera);
      const { yaw, pitch } = dirToYawPitch(threeRef.current.raycaster.ray.direction);
      callbacksRef.current.onPlaceHotspot(Math.round(yaw), Math.round(pitch));
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const nextFov = THREE.MathUtils.clamp(
      stateRef.current.targetFov + e.deltaY * 0.04,
      35,
      95
    );
    stateRef.current.targetFov = nextFov;
    callbacksRef.current.onFovChange?.(Math.round(nextFov));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (stateRef.current.lastPinchDist !== null) {
        const delta = stateRef.current.lastPinchDist - dist;
        const nextFov = THREE.MathUtils.clamp(
          stateRef.current.targetFov + delta * 0.15,
          35,
          95
        );
        stateRef.current.targetFov = nextFov;
        callbacksRef.current.onFovChange?.(Math.round(nextFov));
      }
      stateRef.current.lastPinchDist = dist;
    }
  };

  const handleTouchEnd = () => {
    stateRef.current.lastPinchDist = null;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full h-full select-none overflow-hidden touch-none ${
        placementMode ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'
      } ${className}`}
    >
      {/* Cross-fade veil during room transitions */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-slate-950 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-65' : 'opacity-0'
        }`}
      />

      {/* Placement mode crosshair banner */}
      {placementMode && (
        <div className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-blue-600/95 px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
          <Crosshair className="h-3.5 w-3.5" />
          <span>Tap anywhere in the 360° view to place navigation hotspot</span>
        </div>
      )}

      {/* 3D Projected Cobalt Blue Hotspot Beacons */}
      {room.hotspots.map((hs) => {
        const isHovered = hoveredHotspotId === hs.id;
        return (
          <button
            key={hs.id}
            type="button"
            data-hotspot="true"
            ref={(el) => {
              if (el) hotspotRefs.current.set(hs.id, el);
              else hotspotRefs.current.delete(hs.id);
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectHotspot?.(hs);
            }}
            onMouseEnter={() => setHoveredHotspotId(hs.id)}
            onMouseLeave={() => setHoveredHotspotId(null)}
            style={{ opacity: 0, left: '50%', top: '50%' }}
            className="hotspot-beacon group absolute z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#2563EB] text-white shadow-xl transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            aria-label={`Go to ${hs.label}`}
          >
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span
              className={`pointer-events-none absolute bottom-full mb-2.5 whitespace-nowrap rounded-lg bg-[#0F172A]/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-150 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0.5 sm:opacity-0 sm:group-hover:opacity-100'
              }`}
            >
              {hs.label}
            </span>
          </button>
        );
      })}

      {/* Subtle Bottom-Left Compass Orientation Indicator */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1.5 rounded-full bg-[#0F172A]/70 px-3 py-1 text-[11px] font-mono text-slate-200 backdrop-blur-md">
        <Compass className="h-3.5 w-3.5 text-blue-400" />
        <span>Drag to look • Scroll to zoom</span>
      </div>
    </div>
  );
};
