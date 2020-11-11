import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'smart-table',
        component: SmartTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
