import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ModalOverlaysComponent,
    children: [
      {
        path: 'dialog',
        component: DialogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalOverlaysRoutingModule { }
