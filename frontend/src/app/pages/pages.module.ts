import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { UiFeaturesComponent } from './ui-features/ui-features.component';

@NgModule({
  declarations: [PagesComponent, UiFeaturesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ]
})
export class PagesModule { }
