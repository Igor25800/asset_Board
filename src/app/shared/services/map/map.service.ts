import {Injectable} from '@angular/core';
import {asset, AssetInterfaces} from "../../interfaces/asset.interfaces";

@Injectable({
  providedIn: 'root'
})
export class MapService {
   public arrayAsset: Array<AssetInterfaces> = [
      {
        id: 1,
        name: 'Misha',
        type: asset.TRUCK,
        lat: 49.84178857391628,
        lng: 24.031238169561295
      },
      {
        id: 2,
        name: 'Igor',
        type: asset.TRANSPORT,
        lat: 48.84178857391628,
        lng: 30.031238169561295
      },
     {
       id: 3,
       name: 'Roman',
       type: asset.TRAILER,
       lat: 30.84178857391628,
       lng: 80.031238169561295
     },
    ];
}
