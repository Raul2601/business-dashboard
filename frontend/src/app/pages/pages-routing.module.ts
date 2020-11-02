import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module')
          .then(m => m.LayoutModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module')
          .then(m => m.FormsModule)
      },
      {
        path: 'ui-features',
        loadChildren: () => import('./ui-features/ui-features.module')
          .then(m => m.UiFeaturesModule)
      },
      {
        path: 'modal-overlays',
        loadChildren: () => import('./modal-overlays/modal-overlays.module')
          .then(m => m.ModalOverlaysModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
