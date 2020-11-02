import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalOverlaysRoutingModule } from './modal-overlays-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from '../../shared/material.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [DialogComponent, ModalOverlaysComponent],
  imports: [
    CommonModule,
    ModalOverlaysRoutingModule,
    CoreModule,
    MaterialModule,
    ModalModule
  ]
})
export class ModalOverlaysModule { }
