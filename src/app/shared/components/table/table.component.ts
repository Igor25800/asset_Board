import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AssetInterfaces} from "../../interfaces/asset.interfaces";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class TableComponent  {
  @Input() arrayAsset: Array<AssetInterfaces> = [];
  @Input() set name(value: string) {
    this.nameBtn = value;
  };
  @Output() eventAsset = new EventEmitter();
  @Output() changesAsset = new EventEmitter();
  @Output() eventDeleteAsset = new EventEmitter();
  @Output() eventName = new EventEmitter();
  @Output() add = new EventEmitter();
  index!: number;
  selectedAsset!: AssetInterfaces;
  nameBtn!: string;

  constructor(private toastr: ToastrService) {
  }

  activate(index: number, asset: AssetInterfaces): void {
    this.index = index;
    this.eventAsset.emit(asset);
  }

  editAsset(asset: AssetInterfaces): void {
    this.selectedAsset = asset;
    this.nameBtn = 'Save';
    this.eventName.emit(this.nameBtn);
  }

  deleteAsset(id: number): void {
    this.eventDeleteAsset.emit(id);
    this.toastr.success('delete');
  }

  saveAsset(asset: AssetInterfaces): void {
    this.changesAsset.emit(asset);
  }

  clearAsset(value: any): void {
    this.selectedAsset = value;
  }

  addAsset(asset: AssetInterfaces): void {
    this.add.emit(asset);
  }
}
