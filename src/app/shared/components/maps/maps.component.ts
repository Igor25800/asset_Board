import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {AssetInterfaces} from "../../interfaces/asset.interfaces";

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.scss']
})
export class MapsComponent implements OnInit {
  @Input() set array(value: Array<AssetInterfaces> ) {
    this.arrayAsset = value;
    this.initMap();
  }
  @Input() set selectedAsset(value: AssetInterfaces) {
    if (value) {
      this.arrayAsset = [value];
      this.zoom = 11;
      this.initMap();
    }
  }
  arrayAsset: Array<AssetInterfaces> = [];
  @ViewChild('map') divMap!: ElementRef;
  private map!: any;
  private zoom = 2;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const loader = new Loader({
      apiKey: ''
    });
    loader.load().then(() => {
      this.map = new google.maps.Map(this.divMap.nativeElement, {
        zoom: this.zoom,
        disableDefaultUI: true
      })
      this.arrayAsset.forEach((el: AssetInterfaces) => {
        const marker =  new google.maps.Marker({
          position: { lat: el.lat, lng: el.lng },
          map: this.map,
          title: "Uluru (Ayers Rock)"
        })
        const infowindow = new google.maps.InfoWindow({
          content: el.name,
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map: this.map,
            shouldFocus: false,
          });
        });
        this.map.setCenter(marker.getPosition())
      })
    })
  }
}
