import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [MiscellaneousComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule,
    NgbModule,
    CoreModule,
    MaterialModule
  ]
})
export class MiscellaneousModule { }
