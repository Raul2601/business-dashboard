import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MapsComponent } from './maps.component';

const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
      {
        path: 'gmaps',
        component: GoogleMapsComponent
      },
      {
        path: 'leaflet',
        component: LeafletComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
