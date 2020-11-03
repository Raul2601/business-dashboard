import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { PopoversComponent } from './popovers/popovers.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '',
    component: ModalOverlaysComponent,
    children: [
      {
        path: 'dialog',
        component: DialogComponent
      },
      {
        path: 'popover',
        component: PopoversComponent
      },
      {
        path: 'tooltip',
        component: TooltipComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalOverlaysRoutingModule { }
