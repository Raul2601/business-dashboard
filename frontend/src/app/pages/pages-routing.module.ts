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
      },
      {
        path: 'extra-components',
        loadChildren: () => import('./extra-components/extra-components.module')
          .then(m => m.ExtraComponentsModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module')
          .then(m => m.MapsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module')
          .then(m => m.ChartsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module')
          .then(m => m.TablesModule)
      },
      {
        path: 'miscellaneous',
        loadChildren: () => import('./miscellaneous/miscellaneous.module')
          .then(m => m.MiscellaneousModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module')
          .then(m => m.InventoryModule)
      },
      {
        path: 'finance',
        loadChildren: () => import('./finance/finance.module')
          .then(m => m.FinanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
