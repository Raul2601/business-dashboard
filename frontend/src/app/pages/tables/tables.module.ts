import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TreeGridComponent } from './tree-grid/tree-grid.component';

@NgModule({
  declarations: [TablesComponent, SmartTableComponent, TreeGridComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    CoreModule,
    MaterialModule,
    NgbModule
  ]
})
export class TablesModule { } 
