import React, { useEffect, useMemo, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import {
  Building2,
  Camera,
  Check,
  ChevronDown,
  Maximize2,
  Minimize2,
  Pause,
  Phone,
  RotateCw,
  Share2,
} from 'lucide-react';
import { DEMO_TOUR } from './data/demoTour';
import type { PropertyTour } from './types/tourSchema';
import { Viewer360 } from './components/Viewer360';
import { FloorPlanMinimap } from './components/FloorPlanMinimap';
import { CaptureHud } from './components/CaptureHud';

type AppMode = 'viewer' | 'capture';

function resolveInitialMode(): AppMode {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    if (modeParam === 'capture') return 'capture';
    if (modeParam === 'viewer') return 'viewer';
  }
  return Capacitor.isNativePlatform() ? 'capture' : 'viewer';
}

function resolveUnbrandedFlag(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('unbranded') === 'true';
}

export const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(resolveInitialMode);
  const [isUnbranded] = useState<boolean>(resolveUnbrandedFlag);
  const [tour, setTour] = useState<PropertyTour>(DEMO_TOUR);
  const [activeRoomId, setActiveRoomId] = useState<string>(DEMO_TOUR.rooms[0].id);
  const [currentYaw, setCurrentYaw] = useState<number>(DEMO_TOUR.rooms[0].initialYaw);
  const [fov, setFov] = useState<number>(75);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const activeRoom = useMemo(
    () => tour.rooms.find((r) => r.id === activeRoomId) ?? tour.rooms[0],
    [tour.rooms, activeRoomId]
  );

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleToggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore if fullscreen unsupported
    }
  };

  if (mode === 'capture') {
    return (
      <CaptureHud
        tour={tour}
        onUpdateTour={setTour}
        onSwitchToViewer={() => setMode('viewer')}
      />
    );
  }

  return (
    <main className="relative h-full w-full overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      {/* Full-bleed 360° WebGL Sphere Viewer */}
      <Viewer360
        room={activeRoom}
        autoRotate={autoRotate}
        fov={fov}
        onFovChange={setFov}
        onYawChange={setCurrentYaw}
        onSelectHotspot={(hs) => setActiveRoomId(hs.targetRoomId)}
      />

      {/* Top-Left Floating Frosted-Glass Property Header Badge */}
      <header className="pointer-events-auto absolute top-4 left-4 z-30 flex max-w-[calc(100vw-2rem)] sm:max-w-md flex-col gap-2.5 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/88 p-3.5 shadow-xl backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="truncate font-display text-base sm:text-lg font-bold tracking-tight text-[#0F172A]">
              {tour.title}
            </h1>
            <p className="truncate text-xs text-slate-500">{tour.address}</p>
          </div>

          <button
            type="button"
            onClick={handleCopyShareLink}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#0F172A] transition hover:border-[#2563EB]/40 hover:text-[#2563EB]"
            title="Copy tour link"
          >
            {copiedShare ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#10B981]" />
                <span className="text-[#10B981]">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        {/* Room Selector Dropdown */}
        <div className="relative">
          <select
            aria-label="Select Room"
            value={activeRoom.id}
            onChange={(e) => setActiveRoomId(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-2 pl-3 pr-9 text-xs font-semibold text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
          >
            {tour.rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
                {r.dimensions ? ` (${r.dimensions})` : ''}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        </div>
      </header>

      {/* Top-Right Viewer Controls & Agency Branding (Stripped when ?unbranded=true) */}
      <div className="pointer-events-auto absolute top-4 right-4 z-30 flex flex-col items-end gap-2">
        <div className="flex items-center gap-1.5 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/88 p-1.5 shadow-lg backdrop-blur-md">
          <button
            type="button"
            onClick={() => setAutoRotate((a) => !a)}
            className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition ${
              autoRotate
                ? 'bg-[#2563EB] text-white'
                : 'text-[#0F172A] hover:bg-[#F8FAFC]'
            }`}
            title={autoRotate ? 'Pause auto-rotate' : 'Auto-rotate view'}
          >
            {autoRotate ? <Pause className="h-3.5 w-3.5" /> : <RotateCw className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{autoRotate ? 'Pause' : 'Auto-Rotate'}</span>
          </button>

          <button
            type="button"
            onClick={handleToggleFullscreen}
            className="rounded-xl p-1.5 text-[#0F172A] hover:bg-[#F8FAFC] transition"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>

          {!isUnbranded && (
            <button
              type="button"
              onClick={() => setMode('capture')}
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1.5 text-xs font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:text-[#2563EB] transition"
              title="Open Capture HUD"
            >
              <Camera className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Capture HUD</span>
            </button>
          )}
        </div>

        {/* Agency & Agent Card — Hidden in ?unbranded=true for Rightmove / Zoopla / MLS */}
        {!isUnbranded && (
          <div className="hidden md:flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/88 px-3.5 py-2 shadow-lg backdrop-blur-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
              <Building2 className="h-4 w-4" />
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-[#0F172A]">{tour.agencyName}</p>
              {tour.agentName && (
                <p className="flex items-center justify-end gap-1 text-[11px] text-slate-500">
                  <span>{tour.agentName}</span>
                  {tour.agentPhone && (
                    <>
                      <span>•</span>
                      <Phone className="h-3 w-3 text-[#2563EB]" />
                      <span>{tour.agentPhone}</span>
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom-Center Quick Room Switcher Pills */}
      <nav
        aria-label="Rooms"
        className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#FFFFFF]/90 p-1.5 shadow-xl backdrop-blur-md"
      >
        {tour.rooms.map((r) => {
          const isActive = r.id === activeRoom.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveRoomId(r.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              {r.name}
            </button>
          );
        })}
      </nav>

      {/* Bottom-Right Collapsible 2D Architectural Floor Plan Minimap */}
      <FloorPlanMinimap
        rooms={tour.rooms}
        activeRoomId={activeRoom.id}
        currentYaw={currentYaw}
        fov={fov}
        onSelectRoom={setActiveRoomId}
        className="pointer-events-auto absolute bottom-4 right-4 z-30"
      />
    </main>
  );
};

export default App;
