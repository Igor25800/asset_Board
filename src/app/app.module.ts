import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MapsComponent} from "./shared/components/maps/maps.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableComponent} from "./shared/components/table/table.component";
import {HomeComponent} from "./pages/home/home.component";
import {DialogComponent} from "./shared/components/dialog/dialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    TableComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
