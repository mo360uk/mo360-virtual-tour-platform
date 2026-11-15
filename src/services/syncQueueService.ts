import { Capacitor } from '@capacitor/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Network, type ConnectionStatus } from '@capacitor/network';
import type { PropertyTour, RoomNode } from '../types/tourSchema';

export type SyncItemStatus = 'pending' | 'syncing' | 'synced' | 'failed';

export interface SyncQueueItem {
  id: string;
  tourId: string;
  room: RoomNode;
  localImageUri: string;
  previewImageUri?: string;
  manifestSnapshot: PropertyTour;
  status: SyncItemStatus;
  attempts: number;
  createdAt: string;
  updatedAt: string;
  lastError?: string;
}

export interface QueueStatus {
  isOnline: boolean;
  connectionType: string;
  isFlushing: boolean;
  pendingCount: number;
  syncingCount: number;
  syncedCount: number;
  failedCount: number;
  totalCount: number;
  lastSyncedAt: string | null;
  items: SyncQueueItem[];
}

export interface EnqueueRoomInput {
  tour: PropertyTour;
  room: RoomNode;
  localImageUri: string;
  previewImageUri?: string;
}

export type SyncUploader = (item: SyncQueueItem) => Promise<void>;
type QueueListener = (status: QueueStatus) => void;

const QUEUE_STORAGE_KEY = 'mo360_sync_queue_v1';
const MANIFEST_STORAGE_PREFIX = 'mo360_tour_manifest_v1_';
const LAST_SYNC_STORAGE_KEY = 'mo360_last_synced_at_v1';
const FS_ROOT_DIR = 'mo360-tours';

let queueItems: SyncQueueItem[] = loadQueueFromStorage();
let isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
let connectionType: string = isOnline ? 'wifi' : 'none';
let isFlushing = false;
let lastSyncedAt: string | null = loadLastSyncedAt();
let initialized = false;
let customUploader: SyncUploader | null = null;

const listeners = new Set<QueueListener>();

function loadQueueFromStorage(): SyncQueueItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(QUEUE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SyncQueueItem[]) : [];
  } catch {
    return [];
  }
}

function saveQueueToStorage(items: SyncQueueItem[]): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage quota errors in restricted webviews
  }
}

function loadLastSyncedAt(): string | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    return localStorage.getItem(LAST_SYNC_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLastSyncedAt(timestamp: string): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(LAST_SYNC_STORAGE_KEY, timestamp);
  } catch {
    // Ignore storage quota errors
  }
}

async function writeFilesystemJson(relativePath: string, data: unknown): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    return;
  }
  try {
    await Filesystem.writeFile({
      path: `${FS_ROOT_DIR}/${relativePath}`,
      data: JSON.stringify(data, null, 2),
      directory: Directory.Data,
      encoding: Encoding.UTF8,
      recursive: true,
    });
  } catch {
    // Native filesystem persistence is best-effort alongside localStorage
  }
}

export async function saveTourManifest(tour: PropertyTour): Promise<void> {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(`${MANIFEST_STORAGE_PREFIX}${tour.id}`, JSON.stringify(tour));
    } catch {
      // Ignore storage quota errors
    }
  }
  await writeFilesystemJson(`${tour.id}/manifest.json`, tour);
}

export function getTourManifest(tourId: string): PropertyTour | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`${MANIFEST_STORAGE_PREFIX}${tourId}`);
    return raw ? (JSON.parse(raw) as PropertyTour) : null;
  } catch {
    return null;
  }
}

function computeStatus(): QueueStatus {
  let pendingCount = 0;
  let syncingCount = 0;
  let syncedCount = 0;
  let failedCount = 0;

  for (const item of queueItems) {
    if (item.status === 'pending') pendingCount += 1;
    else if (item.status === 'syncing') syncingCount += 1;
    else if (item.status === 'synced') syncedCount += 1;
    else if (item.status === 'failed') failedCount += 1;
  }

  return {
    isOnline,
    connectionType,
    isFlushing,
    pendingCount,
    syncingCount,
    syncedCount,
    failedCount,
    totalCount: queueItems.length,
    lastSyncedAt,
    items: queueItems.map((item) => ({ ...item })),
  };
}

function notifyListeners(): void {
  const snapshot = computeStatus();
  for (const listener of listeners) {
    listener(snapshot);
  }
}

async function persistQueueState(): Promise<void> {
  saveQueueToStorage(queueItems);
  await writeFilesystemJson('sync-queue.json', queueItems);
}

async function defaultUploader(item: SyncQueueItem): Promise<void> {
  // Persist final manifest & room metadata; if a cloud endpoint is configured via
  // VITE_SYNC_ENDPOINT, POST the manifest & room payload there.
  const endpoint =
    typeof import.meta !== 'undefined' &&
    (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_SYNC_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tourId: item.tourId,
        room: item.room,
        localImageUri: item.localImageUri,
        previewImageUri: item.previewImageUri,
        manifest: item.manifestSnapshot,
      }),
    });
    if (!response.ok) {
      throw new Error(`Cloud sync failed with HTTP ${response.status}`);
    }
    return;
  }

  // Local/offline-first simulation when no remote endpoint is configured
  await new Promise((resolve) => setTimeout(resolve, 180));
}

function handleNetworkChange(status: ConnectionStatus): void {
  const wasOffline = !isOnline;
  isOnline = status.connected;
  connectionType = status.connectionType;
  notifyListeners();

  if (isOnline && (wasOffline || queueItems.some((i) => i.status === 'pending'))) {
    void flushQueue();
  }
}

export async function initSyncListeners(): Promise<void> {
  if (initialized) return;
  initialized = true;

  try {
    const status = await Network.getStatus();
    isOnline = status.connected;
    connectionType = status.connectionType;
  } catch {
    isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    connectionType = isOnline ? 'wifi' : 'none';
  }

  try {
    await Network.addListener('networkStatusChange', handleNetworkChange);
  } catch {
    // Fallback to browser events below
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('online', () => {
      isOnline = true;
      connectionType = 'wifi';
      notifyListeners();
      void flushQueue();
    });

    window.addEventListener('offline', () => {
      isOnline = false;
      connectionType = 'none';
      notifyListeners();
    });
  }

  notifyListeners();

  if (isOnline && queueItems.some((item) => item.status === 'pending')) {
    void flushQueue();
  }
}

export function setSyncUploader(uploader: SyncUploader | null): void {
  customUploader = uploader;
}

export async function enqueueRoom(input: EnqueueRoomInput): Promise<SyncQueueItem> {
  await initSyncListeners();

  const now = new Date().toISOString();
  const roomToQueue: RoomNode = {
    ...input.room,
    capturedAt: input.room.capturedAt ?? now,
    synced: false,
  };

  const updatedTour: PropertyTour = {
    ...input.tour,
    updatedAt: now,
    rooms: input.tour.rooms.some((r) => r.id === roomToQueue.id)
      ? input.tour.rooms.map((r) => (r.id === roomToQueue.id ? roomToQueue : r))
      : [...input.tour.rooms, roomToQueue],
  };

  await saveTourManifest(updatedTour);

  const item: SyncQueueItem = {
    id: `sync_${input.tour.id}_${roomToQueue.id}_${Date.now()}`,
    tourId: input.tour.id,
    room: roomToQueue,
    localImageUri: input.localImageUri,
    previewImageUri: input.previewImageUri,
    manifestSnapshot: updatedTour,
    status: 'pending',
    attempts: 0,
    createdAt: now,
    updatedAt: now,
  };

  queueItems = [
    ...queueItems.filter((existing) => !(existing.tourId === item.tourId && existing.room.id === item.room.id && existing.status !== 'synced')),
    item,
  ];

  await persistQueueState();
  await writeFilesystemJson(`${input.tour.id}/rooms/${roomToQueue.id}.json`, item);
  notifyListeners();

  if (isOnline) {
    void flushQueue();
  }

  return item;
}

export function getQueueStatus(): QueueStatus {
  return computeStatus();
}

export async function flushQueue(uploader?: SyncUploader): Promise<QueueStatus> {
  await initSyncListeners();

  if (!isOnline || isFlushing) {
    return computeStatus();
  }

  const pendingIndices = queueItems
    .map((item, idx) => (item.status === 'pending' || item.status === 'failed' ? idx : -1))
    .filter((idx) => idx !== -1);

  if (pendingIndices.length === 0) {
    return computeStatus();
  }

  isFlushing = true;
  notifyListeners();

  const activeUploader = uploader ?? customUploader ?? defaultUploader;

  try {
    for (const idx of pendingIndices) {
      if (!isOnline) break;

      const current = queueItems[idx];
      if (!current) continue;

      queueItems[idx] = {
        ...current,
        status: 'syncing',
        attempts: current.attempts + 1,
        updatedAt: new Date().toISOString(),
        lastError: undefined,
      };
      await persistQueueState();
      notifyListeners();

      try {
        await activeUploader(queueItems[idx]);

        const syncedAt = new Date().toISOString();
        const syncedRoom: RoomNode = { ...queueItems[idx].room, synced: true };
        const updatedManifest: PropertyTour = {
          ...queueItems[idx].manifestSnapshot,
          updatedAt: syncedAt,
          rooms: queueItems[idx].manifestSnapshot.rooms.map((r) =>
            r.id === syncedRoom.id ? syncedRoom : r
          ),
        };

        await saveTourManifest(updatedManifest);

        queueItems[idx] = {
          ...queueItems[idx],
          room: syncedRoom,
          manifestSnapshot: updatedManifest,
          status: 'synced',
          updatedAt: syncedAt,
        };
        lastSyncedAt = syncedAt;
        saveLastSyncedAt(syncedAt);
      } catch (err) {
        queueItems[idx] = {
          ...queueItems[idx],
          status: 'failed',
          updatedAt: new Date().toISOString(),
          lastError: err instanceof Error ? err.message : 'Unknown sync error',
        };
      }

      await persistQueueState();
      notifyListeners();
    }
  } finally {
    isFlushing = false;
    notifyListeners();
  }

  return computeStatus();
}

export function subscribe(listener: QueueListener): () => void {
  listeners.add(listener);
  void initSyncListeners();
  listener(computeStatus());
  return () => {
    listeners.delete(listener);
  };
}
