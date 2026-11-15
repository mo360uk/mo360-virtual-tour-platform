import React, { useEffect, useMemo, useState } from 'react';
import {
  BatteryCharging,
  Camera,
  CheckCircle2,
  Crosshair,
  Eye,
  HardDrive,
  Loader2,
  Radio,
  Sparkles,
  Wifi,
} from 'lucide-react';
import type { HotspotLink, PropertyTour, RoomNode } from '../types/tourSchema';
import {
  captureDownloadAndWipe,
  getUseMockTheta,
  setUseMockTheta,
  THETA_BASE_URL,
  type CaptureProgressEvent,
  type CaptureStep,
} from '../services/thetaOscService';
import { enqueueRoom, getQueueStatus, subscribe, type QueueStatus } from '../services/syncQueueService';
import { Viewer360 } from './Viewer360';

export interface CaptureHudProps {
  tour: PropertyTour;
  onUpdateTour: (updated: PropertyTour) => void;
  onSwitchToViewer?: () => void;
}

type ExposurePreset = 'auto' | 'hdr' | 'manual';

interface ProgressPill {
  id: string;
  label: string;
  steps: CaptureStep[];
}

const PROGRESS_PILLS: ProgressPill[] = [
  { id: 'shutter', label: 'Triggering Shutter', steps: ['connecting', 'capturing'] },
  { id: 'stitch', label: 'Internal Stitching', steps: ['processing'] },
  { id: 'download', label: 'Downloading to Pixel', steps: ['downloading'] },
  { id: 'wipe', label: 'Wiping Theta Memory', steps: ['wiping'] },
  { id: 'ready', label: 'Ready', steps: ['done'] },
];

export const CaptureHud: React.FC<CaptureHudProps> = ({
  tour,
  onUpdateTour,
  onSwitchToViewer,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(tour.rooms[0]?.id ?? 'living-room');
  const [targetHotspotRoomId, setTargetHotspotRoomId] = useState<string>(
    tour.rooms[1]?.id ?? tour.rooms[0]?.id ?? ''
  );
  const [mockTheta, setMockThetaState] = useState<boolean>(() => getUseMockTheta());
  const [exposurePreset, setExposurePreset] = useState<ExposurePreset>('hdr');
  const [manualIso, setManualIso] = useState<number>(200);
  const [manualShutter, setManualShutter] = useState<string>('1/125');

  const [isCapturing, setIsCapturing] = useState(false);
  const [captureEvent, setCaptureEvent] = useState<CaptureProgressEvent | null>(null);
  const [captureError, setCaptureError] = useState<string | null>(null);
  const [placementMode, setPlacementMode] = useState(false);
  const [queueStatus, setQueueStatus] = useState<QueueStatus>(() => getQueueStatus());

  useEffect(() => {
    const unsub = subscribe(setQueueStatus);
    return unsub;
  }, []);

  const activeRoom: RoomNode = useMemo(
    () => tour.rooms.find((r) => r.id === selectedRoomId) ?? tour.rooms[0],
    [tour.rooms, selectedRoomId]
  );

  // Keep target hotspot room different from active room when possible
  useEffect(() => {
    if (targetHotspotRoomId === selectedRoomId) {
      const other = tour.rooms.find((r) => r.id !== selectedRoomId);
      if (other) setTargetHotspotRoomId(other.id);
    }
  }, [selectedRoomId, targetHotspotRoomId, tour.rooms]);

  const handleToggleMock = () => {
    const next = !mockTheta;
    setUseMockTheta(next);
    setMockThetaState(next);
  };

  const handleCapture = async () => {
    if (isCapturing || !activeRoom) return;
    setIsCapturing(true);
    setCaptureError(null);
    setCaptureEvent({
      step: 'connecting',
      progress: 5,
      message: `Connecting to ${THETA_BASE_URL}...`,
    });

    try {
      const result = await captureDownloadAndWipe(
        activeRoom.id,
        {
          baseUrl: THETA_BASE_URL,
          hdr: exposurePreset === 'hdr',
          exposureCompensation: exposurePreset === 'hdr' ? 0 : undefined,
        },
        (evt) => {
          setCaptureEvent(evt);
        }
      );

      const updatedRoom: RoomNode = {
        ...activeRoom,
        panoPreviewUrl: result.displayUrl || activeRoom.panoPreviewUrl,
        panoHighResUrl: result.displayUrl || activeRoom.panoHighResUrl,
        capturedAt: result.capturedAt,
        synced: false,
      };

      const updatedTour: PropertyTour = {
        ...tour,
        updatedAt: result.capturedAt,
        rooms: tour.rooms.map((r) => (r.id === updatedRoom.id ? updatedRoom : r)),
      };

      onUpdateTour(updatedTour);

      await enqueueRoom({
        tour: updatedTour,
        room: updatedRoom,
        localImageUri: result.localPath,
        previewImageUri: result.displayUrl,
      });
    } catch (err) {
      setCaptureError(err instanceof Error ? err.message : 'Capture failed.');
    } finally {
      setIsCapturing(false);
    }
  };

  const handlePlaceHotspot = (yaw: number, pitch: number) => {
    if (!activeRoom || !targetHotspotRoomId) return;
    const targetRoom = tour.rooms.find((r) => r.id === targetHotspotRoomId);
    if (!targetRoom) return;

    const newHotspot: HotspotLink = {
      id: `hs-${activeRoom.id}-to-${targetRoom.id}-${Date.now()}`,
      targetRoomId: targetRoom.id,
      yaw,
      pitch,
      label: targetRoom.name,
    };

    const updatedRoom: RoomNode = {
      ...activeRoom,
      hotspots: [...activeRoom.hotspots, newHotspot],
    };

    onUpdateTour({
      ...tour,
      updatedAt: new Date().toISOString(),
      rooms: tour.rooms.map((r) => (r.id === activeRoom.id ? updatedRoom : r)),
    });

    setPlacementMode(false);
  };

  const activeStepIndex = useMemo(() => {
    if (!captureEvent) return -1;
    return PROGRESS_PILLS.findIndex((p) => p.steps.includes(captureEvent.step));
  }, [captureEvent]);

  return (
    <div className="flex h-full w-full flex-col bg-[#090D16] text-slate-100 select-none">
      {/* Top Telemetry Bar */}
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/90 bg-[#0D1320] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <Wifi className="h-3.5 w-3.5 text-[#10B981]" />
            <span className="font-mono text-xs font-medium text-emerald-300">
              {THETA_BASE_URL}
            </span>
            <span className="hidden sm:inline text-[11px] text-slate-400">
              • Ricoh Theta SC/S
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-800">
              <BatteryCharging className="h-3.5 w-3.5 text-[#10B981]" />
              84%
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-800">
              <HardDrive className="h-3.5 w-3.5 text-blue-400" />
              Pixel 9 Pro: 184 GB free
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-800">
              <Radio className="h-3.5 w-3.5 text-amber-400" />
              Sync: {queueStatus.pendingCount} pending
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* USE_MOCK_THETA Toggle */}
          <button
            type="button"
            onClick={handleToggleMock}
            className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              mockTheta
                ? 'border-amber-500/40 bg-amber-500/15 text-amber-300'
                : 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                mockTheta ? 'bg-amber-400' : 'bg-[#10B981]'
              }`}
            />
            <span>USE_MOCK_THETA: {mockTheta ? 'ON' : 'OFF'}</span>
          </button>

          {onSwitchToViewer && (
            <button
              type="button"
              onClick={onSwitchToViewer}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
            >
              <Eye className="h-3.5 w-3.5 text-blue-400" />
              <span>Preview Tour</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Split Body: On-Device 360 Previewer + Field Controller */}
      <div className="relative flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Instant On-Device 360° Previewer */}
        <div className="relative flex-1 min-h-[260px] bg-black">
          {activeRoom && (
            <Viewer360
              room={activeRoom}
              placementMode={placementMode}
              onPlaceHotspot={handlePlaceHotspot}
              onSelectHotspot={(hs) => setSelectedRoomId(hs.targetRoomId)}
            />
          )}

          {/* Room Badge Overlay */}
          <div className="pointer-events-none absolute top-3 left-3 z-20 flex items-center gap-2 rounded-xl border border-slate-700/70 bg-[#090D16]/80 px-3 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-semibold text-white">{activeRoom?.name}</span>
            {activeRoom?.capturedAt && (
              <span className="font-mono text-[10px] text-emerald-400">CAPTURED</span>
            )}
          </div>
        </div>

        {/* Right / Bottom Field Control Deck */}
        <aside className="flex w-full lg:w-[390px] shrink-0 flex-col gap-4 overflow-y-auto border-t lg:border-t-0 lg:border-l border-slate-800 bg-[#0D1320] p-4">
          {/* Room Selector */}
          <div>
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Active Capture Room
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {tour.rooms.map((r) => {
                const selected = r.id === activeRoom?.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedRoomId(r.id)}
                    className={`rounded-xl border px-2.5 py-2 text-xs font-semibold transition truncate ${
                      selected
                        ? 'border-[#2563EB] bg-[#2563EB]/20 text-white shadow-sm'
                        : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {r.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tactile Exposure Preset Selector */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Exposure Preset
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'auto' as const, title: 'Auto', sub: 'Balanced' },
                { id: 'hdr' as const, title: 'HDR Bracket', sub: '-2 / 0 / +2 EV' },
                { id: 'manual' as const, title: 'Manual', sub: 'ISO / Shutter' },
              ].map((preset) => {
                const active = exposurePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setExposurePreset(preset.id)}
                    className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition ${
                      active
                        ? 'border-blue-500 bg-blue-500/15 text-white'
                        : 'border-slate-800 bg-slate-900/70 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold">{preset.title}</span>
                    <span className="mt-0.5 font-mono text-[10px] opacity-80">{preset.sub}</span>
                  </button>
                );
              })}
            </div>

            {exposurePreset === 'manual' && (
              <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-2.5">
                <label className="text-[11px] text-slate-400">
                  ISO
                  <select
                    value={manualIso}
                    onChange={(e) => setManualIso(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-[#090D16] px-2 py-1 font-mono text-xs text-white"
                  >
                    {[100, 200, 400, 800, 1600].map((v) => (
                      <option key={v} value={v}>
                        ISO {v}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-[11px] text-slate-400">
                  Shutter
                  <select
                    value={manualShutter}
                    onChange={(e) => setManualShutter(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-[#090D16] px-2 py-1 font-mono text-xs text-white"
                  >
                    {['1/30', '1/60', '1/125', '1/250', '1/500'].map((v) => (
                      <option key={v} value={v}>
                        {v}s
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}
          </div>

          {/* Primary Capture CTA */}
          <button
            type="button"
            disabled={isCapturing}
            onClick={handleCapture}
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#2563EB] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-[0.99] disabled:opacity-60"
          >
            {isCapturing ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Camera className="h-5 w-5" />
            )}
            <span>
              {isCapturing ? 'Capturing & Offloading...' : 'Capture Room & Auto-Offload'}
            </span>
          </button>

          {/* 5-Step Progress Pills */}
          <div className="space-y-1.5 rounded-2xl border border-slate-800 bg-[#090D16] p-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
              <span>OSC PIPELINE</span>
              <span>{captureEvent ? `${captureEvent.progress}%` : 'IDLE'}</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {PROGRESS_PILLS.map((pill, idx) => {
                const isDone = activeStepIndex > idx || (activeStepIndex === 4 && idx === 4);
                const isCurrent = activeStepIndex === idx && captureEvent?.step !== 'done';
                return (
                  <div
                    key={pill.id}
                    className={`flex items-center justify-between rounded-xl border px-3 py-1.5 text-xs font-medium transition ${
                      isDone
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                        : isCurrent
                        ? 'border-blue-500/50 bg-blue-500/15 text-blue-200'
                        : 'border-slate-800/80 bg-slate-900/50 text-slate-500'
                    }`}
                  >
                    <span>{pill.label}</span>
                    {isDone ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                    ) : isCurrent ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-400" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                    )}
                  </div>
                );
              })}
            </div>
            {captureError && (
              <p className="mt-2 rounded-lg bg-red-500/15 px-2.5 py-1.5 text-xs text-red-300 border border-red-500/30">
                {captureError}
              </p>
            )}
          </div>

          {/* Hotspot Placement Tool */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Drop Navigation Hotspot
            </label>
            <div className="flex items-center gap-2">
              <select
                value={targetHotspotRoomId}
                onChange={(e) => setTargetHotspotRoomId(e.target.value)}
                className="flex-1 rounded-xl border border-slate-700 bg-[#090D16] px-2.5 py-2 text-xs font-medium text-white"
              >
                {tour.rooms
                  .filter((r) => r.id !== activeRoom?.id)
                  .map((r) => (
                    <option key={r.id} value={r.id}>
                      Link to: {r.name}
                    </option>
                  ))}
              </select>
              <button
                type="button"
                onClick={() => setPlacementMode((p) => !p)}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  placementMode
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <Crosshair className="h-3.5 w-3.5" />
                <span>{placementMode ? 'Tap 360°' : 'Place Pin'}</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
