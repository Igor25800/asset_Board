import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {asset, AssetInterfaces} from "../../interfaces/asset.interfaces";
import { v4 as uuidv4 } from 'uuid';
declare var window: any;


@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() set selected(value: AssetInterfaces) {
    if (value) {
      this.assetForm.patchValue(value)
      this.idSelected = value.id;
    }
  }
  @Input() set name(value: string) {
    this.nameBtn = value;
    if (value === 'Add') {
      this.assetForm.reset();
      this.clearAsset.emit('');
    }
  }
  @Output() saveAsset = new EventEmitter();
  @Output() clearAsset = new EventEmitter();
  @Output() addAsset = new EventEmitter();
  idSelected!: number;
  typeArray: Array<string> = [];
  assetForm!: FormGroup;
  nameBtn!: string;
  formModal: any;

  constructor(
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getForm();
    this.typeArray = Object.values(asset);
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  getForm(): void {
    this.assetForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      lat: new FormControl(null, Validators.required),
      lng: new FormControl(null, Validators.required)
    })
  }

  saveBtn(): void {
    this.saveAsset.emit({...this.assetForm.value, id: this.idSelected});
    this.toastr.success('Save');
    this.formModal.hide();
  }

  addBtn(): void {
    if (!this.assetForm.valid) {
      this.toastr.error('Заполнить все Поля');
      return ;
    }
    const asset = {...this.assetForm.value, id: uuidv4()};
    this.addAsset.emit(asset);
    this.toastr.success('addAsset');
    this.formModal.hide();
  }
}
