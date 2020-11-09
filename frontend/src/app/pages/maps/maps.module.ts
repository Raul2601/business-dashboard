import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';
import { MapsComponent } from './maps.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [GoogleMapsComponent, MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CoreModule,
    MaterialModule,
    GoogleMapsModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyByJno3Qsb8n9uIIM1NX8fBkbAJPvWDt6Q'
    // })
  ]
})
export class MapsModule { }
