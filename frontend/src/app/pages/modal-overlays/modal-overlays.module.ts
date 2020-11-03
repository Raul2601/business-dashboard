import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalOverlaysRoutingModule } from './modal-overlays-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from '../../shared/material.module';
import { PopoversComponent } from './popovers/popovers.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToastsComponent } from './toasts/toasts.component';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
  declarations: [DialogComponent, ModalOverlaysComponent, PopoversComponent, TooltipComponent, ToastsComponent, ToastrComponent],
  imports: [
    CommonModule,
    ModalOverlaysRoutingModule,
    CoreModule,
    MaterialModule,
    NgbModule
  ]
})
export class ModalOverlaysModule { }
