import {Component, OnInit} from "@angular/core";
import {AssetInterfaces} from "../../shared/interfaces/asset.interfaces";
import {MapService} from "../../shared/services/map/map.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public arrayAsset$: Observable<Array<AssetInterfaces>> = of([]);
  public selectedAsset!: AssetInterfaces;
  public addBtn!: string;
  private arrayAsset: Array<AssetInterfaces> = [];

  constructor(
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.arrayAsset$ = of(this.mapService.arrayAsset);
    this.getArrayAsset();
  }

  getArrayAsset(): void {
    this.arrayAsset$.subscribe(res => {
      this.arrayAsset = res;
    })
  }

  eventAsset(event: AssetInterfaces): void {
    this.selectedAsset = event;
  }

  changesAsset(asset: AssetInterfaces): void {
    const array = this.arrayAsset.map(el => el.id === asset.id ? asset : el);
    this.arrayAsset$ = of(array);
  }

  eventDeleteAsset(id: number): void {
    const array = this.arrayAsset.filter(el => el.id !== id)
    this.arrayAsset$ = of(array);
    this.getArrayAsset();
  }

  addAsset(asset?: AssetInterfaces): void {
    this.addBtn = 'Add';
    if (asset) {
      this.arrayAsset.push(asset);
      const array = this.arrayAsset.map(el => el);
      this.arrayAsset$ = of(array);
    }
  }

  eventName(name: string): void {
    this.addBtn = name;
  }
}
