import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalOverlaysRoutingModule } from './modal-overlays-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from '../../shared/material.module';
import { PopoversComponent } from './popovers/popovers.component';

@NgModule({
  declarations: [DialogComponent, ModalOverlaysComponent, PopoversComponent],
  imports: [
    CommonModule,
    ModalOverlaysRoutingModule,
    CoreModule,
    MaterialModule,
  ]
})
export class ModalOverlaysModule { }
