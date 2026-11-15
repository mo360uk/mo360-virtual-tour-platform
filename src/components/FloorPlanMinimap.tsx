import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Map } from 'lucide-react';
import type { RoomNode } from '../types/tourSchema';

export interface FloorPlanMinimapProps {
  rooms: RoomNode[];
  activeRoomId: string;
  currentYaw: number;
  fov?: number;
  onSelectRoom: (roomId: string) => void;
  className?: string;
}

export const FloorPlanMinimap: React.FC<FloorPlanMinimapProps> = ({
  rooms,
  activeRoomId,
  currentYaw,
  fov = 75,
  onSelectRoom,
  className = '',
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const activeRoom = rooms.find((r) => r.id === activeRoomId) ?? rooms[0];

  // Build SVG radar cone path centered at (0, 0) pointing up (-Y = 0° yaw), rotated by currentYaw
  const halfFovRad = ((fov / 2) * Math.PI) / 180;
  const coneRadius = 18;
  const x1 = -Math.sin(halfFovRad) * coneRadius;
  const y1 = -Math.cos(halfFovRad) * coneRadius;
  const x2 = Math.sin(halfFovRad) * coneRadius;
  const y2 = -Math.cos(halfFovRad) * coneRadius;
  const conePath = `M 0 0 L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${coneRadius} ${coneRadius} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;

  return (
    <div
      className={`rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/95 shadow-xl backdrop-blur-md transition-all duration-200 ${className}`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F8FAFC] text-[#2563EB] border border-[#E2E8F0]">
            <Map className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">
              Floor Plan
            </p>
            {activeRoom && (
              <p className="text-[11px] text-slate-500">
                {activeRoom.name}
                {activeRoom.dimensions ? ` • ${activeRoom.dimensions}` : ''}
              </p>
            )}
          </div>
        </div>
        <span className="text-slate-400 hover:text-[#0F172A]">
          {collapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>

      {/* Architectural 2D Floorplan SVG */}
      {!collapsed && (
        <div className="px-3 pb-3">
          <div className="relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-2">
            <svg
              viewBox="0 0 100 78"
              className="h-40 w-56 sm:h-44 sm:w-64"
              role="img"
              aria-label="Interactive 2D Property Floor Plan"
            >
              <defs>
                <radialGradient id="fovRadarGrad" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.06" />
                </radialGradient>
              </defs>

              {/* Subtle architectural grid */}
              <g stroke="#E2E8F0" strokeWidth="0.35">
                <line x1="0" y1="20" x2="100" y2="20" />
                <line x1="0" y1="40" x2="100" y2="40" />
                <line x1="0" y1="60" x2="100" y2="60" />
                <line x1="25" y1="0" x2="25" y2="78" />
                <line x1="50" y1="0" x2="50" y2="78" />
                <line x1="75" y1="0" x2="75" y2="78" />
              </g>

              {/* Outer Penthouse Architectural Walls */}
              <rect
                x="6"
                y="6"
                width="88"
                height="66"
                rx="2"
                fill="#FFFFFF"
                stroke="#0F172A"
                strokeWidth="1.4"
              />

              {/* Interior Partition Walls */}
              {/* Master Bedroom / Upper Suite */}
              <line x1="6" y1="38" x2="40" y2="38" stroke="#0F172A" strokeWidth="1.1" />
              <line x1="56" y1="38" x2="94" y2="38" stroke="#0F172A" strokeWidth="1.1" />
              {/* Living Room / Kitchen Divider */}
              <line x1="50" y1="46" x2="50" y2="72" stroke="#0F172A" strokeWidth="1.1" strokeDasharray="3 2" />

              {/* Harbourside Panoramic Glazing Accent */}
              <line x1="14" y1="72" x2="86" y2="72" stroke="#2563EB" strokeWidth="2.2" />

              {/* Live Cobalt Blue FOV Radar Cone for Active Room */}
              {activeRoom && (
                <g
                  transform={`translate(${activeRoom.floorplanCoords.x}, ${activeRoom.floorplanCoords.y}) rotate(${currentYaw})`}
                >
                  <path d={conePath} fill="url(#fovRadarGrad)" stroke="#2563EB" strokeWidth="0.4" strokeOpacity="0.65" />
                </g>
              )}

              {/* Clickable Room Pins */}
              {rooms.map((room) => {
                const isActive = room.id === activeRoomId;
                return (
                  <g
                    key={room.id}
                    transform={`translate(${room.floorplanCoords.x}, ${room.floorplanCoords.y})`}
                    onClick={() => onSelectRoom(room.id)}
                    className="cursor-pointer"
                  >
                    <circle r="7" fill="transparent" />
                    {isActive && (
                      <circle r="5.2" fill="#2563EB" fillOpacity="0.18" />
                    )}
                    <circle
                      r={isActive ? '3.3' : '2.6'}
                      fill={isActive ? '#2563EB' : '#FFFFFF'}
                      stroke={isActive ? '#FFFFFF' : '#0F172A'}
                      strokeWidth="1.2"
                    />
                    <text
                      y="7.8"
                      textAnchor="middle"
                      fontSize="4.1"
                      fontWeight={isActive ? '700' : '600'}
                      fill={isActive ? '#2563EB' : '#0F172A'}
                    >
                      {room.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
