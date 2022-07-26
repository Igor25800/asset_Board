export interface AssetInterfaces {
  id: number;
  name: string;
  type: string;
  lat: number;
  lng: number;
}

export enum asset {
  TRUCK = 'truck',
  TRAILER = 'trailer',
  TRANSPORT = 'transport'
}
