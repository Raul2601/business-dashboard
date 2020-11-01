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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
