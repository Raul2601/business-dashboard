import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';

import { MapsComponent } from './maps.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { LeafletComponent } from './leaflet/leaflet.component'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [GoogleMapsComponent, MapsComponent, LeafletComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CoreModule,
    MaterialModule,
    GoogleMapsModule,
    LeafletModule
  ]
})
export class MapsModule { }
