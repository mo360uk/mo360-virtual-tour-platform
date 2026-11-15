import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

export const THETA_BASE_URL = 'http://192.168.1.1';
export const MOCK_THETA_STORAGE_KEY = 'mo360_use_mock_theta';

function resolveInitialMockFlag(): boolean {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem(MOCK_THETA_STORAGE_KEY);
    if (stored === 'true') return true;
    if (stored === 'false') return false;
  }

  const envFlag = (import.meta as unknown as { env?: Record<string, string | undefined> }).env
    ?.VITE_USE_MOCK_THETA;
  if (envFlag === 'false') return false;
  if (envFlag === 'true') return true;

  // Default to true in web/dev environments
  return !Capacitor.isNativePlatform() || Boolean((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV);
}

export let USE_MOCK_THETA: boolean = resolveInitialMockFlag();

export function getUseMockTheta(): boolean {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem(MOCK_THETA_STORAGE_KEY);
    if (stored === 'true') {
      USE_MOCK_THETA = true;
      return true;
    }
    if (stored === 'false') {
      USE_MOCK_THETA = false;
      return false;
    }
  }
  return USE_MOCK_THETA;
}

export function setUseMockTheta(enabled: boolean): void {
  USE_MOCK_THETA = enabled;
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem(MOCK_THETA_STORAGE_KEY, String(enabled));
  }
}

export type CaptureStep =
  | 'connecting'
  | 'capturing'
  | 'processing'
  | 'downloading'
  | 'wiping'
  | 'done';

export interface CaptureProgressEvent {
  step: CaptureStep;
  progress: number; // 0 to 100
  message: string;
  fileUrl?: string;
}

export type CaptureProgressCallback = (event: CaptureProgressEvent) => void;

export interface CaptureOptions {
  baseUrl?: string;
  pollIntervalMs?: number;
  timeoutMs?: number;
  exposureCompensation?: number;
  hdr?: boolean;
}

export interface CaptureResult {
  roomId: string;
  localPath: string;
  displayUrl: string;
  cameraFileUrl: string;
  apiVersion: '2.1' | '2.0' | 'mock';
  wipedFromCamera: boolean;
  capturedAt: string;
}

export interface OscInfoResponse {
  manufacturer?: string;
  model?: string;
  serialNumber?: string;
  firmwareVersion?: string;
  apiLevel?: number[];
  endpoints?: {
    httpPort?: number;
    httpUpdatesPort?: number;
  };
}

interface OscCommandExecuteResponse {
  name: string;
  state: 'inProgress' | 'done' | 'error';
  id?: string;
  results?: {
    sessionId?: string;
    fileUrl?: string;
    [key: string]: unknown;
  };
  error?: {
    code: string;
    message: string;
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Failed to convert downloaded panorama blob to base64.'));
        return;
      }
      const commaIdx = result.indexOf(',');
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.onerror = () => reject(reader.error ?? new Error('FileReader error'));
    reader.readAsDataURL(blob);
  });
}

function generateMockEquirectangularPanorama(roomId: string): string {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return '';
  }

  // Sky / ceiling gradient
  const ceilingGrad = ctx.createLinearGradient(0, 0, 0, height * 0.5);
  ceilingGrad.addColorStop(0, '#0f172a');
  ceilingGrad.addColorStop(1, '#1e293b');
  ctx.fillStyle = ceilingGrad;
  ctx.fillRect(0, 0, width, height * 0.5);

  // Floor gradient
  const floorGrad = ctx.createLinearGradient(0, height * 0.5, 0, height);
  floorGrad.addColorStop(0, '#334155');
  floorGrad.addColorStop(1, '#0b1120');
  ctx.fillStyle = floorGrad;
  ctx.fillRect(0, height * 0.5, width, height * 0.5);

  // Horizon line
  ctx.strokeStyle = '#C87D28';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, height * 0.5);
  ctx.lineTo(width, height * 0.5);
  ctx.stroke();

  // Architectural longitude/latitude grid
  ctx.strokeStyle = 'rgba(200, 125, 40, 0.28)';
  ctx.lineWidth = 2;
  for (let x = 0; x <= width; x += width / 12) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += height / 6) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Cardinal direction markers along the horizon
  const cardinals = ['N (0°)', 'E (90°)', 'S (180°)', 'W (270°)'];
  ctx.fillStyle = '#F8FAFC';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  cardinals.forEach((label, idx) => {
    const x = (idx * width) / 4 + width / 8;
    ctx.fillText(label, x, height * 0.5 - 24);
  });

  // Room badge
  ctx.fillStyle = '#C87D28';
  ctx.font = 'bold 28px monospace';
  ctx.fillText(`MO360 MOCK 360° • ROOM: ${roomId}`, width / 2, height * 0.5 + 54);

  return canvas.toDataURL('image/jpeg', 0.9);
}

export async function detectOscApiVersion(
  baseUrl: string = THETA_BASE_URL
): Promise<{ version: '2.1' | '2.0'; info: OscInfoResponse }> {
  const response = await fetch(`${baseUrl}/osc/info`, {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Failed to query THETA /osc/info (HTTP ${response.status})`);
  }

  const info = (await response.json()) as OscInfoResponse;
  const levels = Array.isArray(info.apiLevel) ? info.apiLevel : [];
  const version: '2.1' | '2.0' = levels.includes(2) ? '2.1' : '2.0';
  return { version, info };
}

async function executeOscCommand(
  baseUrl: string,
  name: string,
  parameters?: Record<string, unknown>
): Promise<OscCommandExecuteResponse> {
  const body: Record<string, unknown> = { name };
  if (parameters && Object.keys(parameters).length > 0) {
    body.parameters = parameters;
  }

  const response = await fetch(`${baseUrl}/osc/commands/execute`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = (await response.json()) as OscCommandExecuteResponse;
  if (!response.ok || data.state === 'error') {
    const errMsg = data.error?.message ?? `OSC command ${name} failed (HTTP ${response.status})`;
    throw new Error(errMsg);
  }
  return data;
}

async function pollOscCommandStatus(
  baseUrl: string,
  commandId: string,
  pollIntervalMs: number,
  timeoutMs: number
): Promise<OscCommandExecuteResponse> {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const response = await fetch(`${baseUrl}/osc/commands/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      },
      body: JSON.stringify({ id: commandId })
    });

    if (!response.ok) {
      throw new Error(`OSC status poll failed (HTTP ${response.status})`);
    }

    const status = (await response.json()) as OscCommandExecuteResponse;
    if (status.state === 'done') {
      return status;
    }
    if (status.state === 'error') {
      throw new Error(status.error?.message ?? 'Camera capture failed during processing.');
    }

    await sleep(pollIntervalMs);
  }

  throw new Error(`Timed out waiting for THETA capture status after ${timeoutMs}ms.`);
}

async function runMockCaptureDownloadAndWipe(
  roomId: string,
  onProgress?: CaptureProgressCallback
): Promise<CaptureResult> {
  const emit = (step: CaptureStep, progress: number, message: string, fileUrl?: string) => {
    onProgress?.({ step, progress, message, fileUrl });
  };

  emit('connecting', 10, 'Connecting to Mock RICOH THETA (OSC v2.1)...');
  await sleep(250);

  emit('capturing', 30, 'Triggering 360° dual-fisheye shutter...');
  await sleep(450);

  const mockCameraFileUrl = `http://192.168.1.1/files/100RICOH/R001_${roomId}.JPG`;
  emit('processing', 55, 'Stitching equirectangular panorama...', mockCameraFileUrl);
  await sleep(450);

  emit('downloading', 78, 'Streaming high-res JPEG to local storage...', mockCameraFileUrl);
  const dataUrl = generateMockEquirectangularPanorama(roomId);
  const localPath = `panos/${roomId}_${Date.now()}.jpg`;

  if (Capacitor.isNativePlatform() && dataUrl.includes(',')) {
    const base64 = dataUrl.split(',')[1];
    await Filesystem.writeFile({
      path: localPath,
      data: base64,
      directory: Directory.Data,
      recursive: true
    });
  }
  await sleep(300);

  emit('wiping', 92, 'Wiping camera storage (camera.delete)...', mockCameraFileUrl);
  await sleep(200);

  const capturedAt = new Date().toISOString();
  emit('done', 100, 'Capture, download, and camera wipe complete.', mockCameraFileUrl);

  return {
    roomId,
    localPath,
    displayUrl: dataUrl,
    cameraFileUrl: mockCameraFileUrl,
    apiVersion: 'mock',
    wipedFromCamera: true,
    capturedAt
  };
}

/**
 * Atomic 4-step OSC workflow:
 * 1. Detect OSC v2.1 vs v2.0 (/osc/info + optional camera.startSession)
 * 2. Execute camera.takePicture & poll /osc/commands/status every 500ms
 * 3. Stream-download equirectangular JPEG into Capacitor Filesystem (Directory.Data)
 * 4. Immediately execute camera.delete to free camera internal storage
 */
export async function captureDownloadAndWipe(
  roomId: string,
  options: CaptureOptions = {},
  onProgress?: CaptureProgressCallback
): Promise<CaptureResult> {
  if (getUseMockTheta()) {
    return runMockCaptureDownloadAndWipe(roomId, onProgress);
  }

  const baseUrl = options.baseUrl ?? THETA_BASE_URL;
  const pollIntervalMs = options.pollIntervalMs ?? 500;
  const timeoutMs = options.timeoutMs ?? 30000;

  const emit = (step: CaptureStep, progress: number, message: string, fileUrl?: string) => {
    onProgress?.({ step, progress, message, fileUrl });
  };

  emit('connecting', 10, `Querying ${baseUrl}/osc/info...`);
  const { version } = await detectOscApiVersion(baseUrl);

  let sessionId: string | undefined;
  if (version === '2.0') {
    const sessionRes = await executeOscCommand(baseUrl, 'camera.startSession');
    sessionId = sessionRes.results?.sessionId;
  }

  try {
    emit('capturing', 25, `Executing camera.takePicture (OSC v${version})...`);
    const takeParams = sessionId ? { sessionId } : undefined;
    let captureRes = await executeOscCommand(baseUrl, 'camera.takePicture', takeParams);

    if (captureRes.state === 'inProgress' && captureRes.id) {
      emit('processing', 45, 'Stitching equirectangular panorama...');
      captureRes = await pollOscCommandStatus(baseUrl, captureRes.id, pollIntervalMs, timeoutMs);
    }

    const fileUrl = captureRes.results?.fileUrl;
    if (!fileUrl) {
      throw new Error('THETA camera.takePicture completed without returning results.fileUrl.');
    }

    emit('downloading', 70, 'Downloading equirectangular JPEG to device...', fileUrl);
    const imageResponse = await fetch(fileUrl, { method: 'GET' });
    if (!imageResponse.ok) {
      throw new Error(`Failed to download panorama from ${fileUrl} (HTTP ${imageResponse.status})`);
    }
    const imageBlob = await imageResponse.blob();
    const base64Data = await blobToBase64(imageBlob);

    const localPath = `panos/${roomId}_${Date.now()}.jpg`;
    await Filesystem.writeFile({
      path: localPath,
      data: base64Data,
      directory: Directory.Data,
      recursive: true
    });

    const uriResult = await Filesystem.getUri({
      path: localPath,
      directory: Directory.Data
    });
    const displayUrl = Capacitor.isNativePlatform()
      ? Capacitor.convertFileSrc(uriResult.uri)
      : URL.createObjectURL(imageBlob);

    emit('wiping', 90, 'Deleting image from camera storage (camera.delete)...', fileUrl);
    const deleteParams: Record<string, unknown> = { fileUrls: [fileUrl] };
    if (sessionId) {
      deleteParams.sessionId = sessionId;
    }
    await executeOscCommand(baseUrl, 'camera.delete', deleteParams);

    const capturedAt = new Date().toISOString();
    emit('done', 100, 'Capture, download, and camera wipe complete.', fileUrl);

    return {
      roomId,
      localPath,
      displayUrl,
      cameraFileUrl: fileUrl,
      apiVersion: version,
      wipedFromCamera: true,
      capturedAt
    };
  } finally {
    if (version === '2.0' && sessionId) {
      try {
        await executeOscCommand(baseUrl, 'camera.closeSession', { sessionId });
      } catch {
        // Best-effort session cleanup
      }
    }
  }
}
