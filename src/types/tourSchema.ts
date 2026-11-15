export interface HotspotLink {
  id: string;
  targetRoomId: string;
  yaw: number;
  pitch: number;
  label: string;
}

export interface FloorplanCoords {
  x: number;
  y: number;
}

export interface RoomNode {
  id: string;
  name: string;
  panoPreviewUrl: string;
  panoHighResUrl: string;
  initialYaw: number;
  floorplanCoords: FloorplanCoords;
  dimensions?: string;
  hotspots: HotspotLink[];
  capturedAt?: string;
  synced?: boolean;
}

export interface PropertyTour {
  id: string;
  title: string;
  address: string;
  agencyName: string;
  agencyLogoUrl?: string;
  agentName?: string;
  agentPhone?: string;
  floorplanSvgUrl?: string;
  rooms: RoomNode[];
  createdAt: string;
  updatedAt: string;
}
