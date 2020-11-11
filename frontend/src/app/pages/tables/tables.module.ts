import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [TablesComponent, SmartTableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    CoreModule,
    MaterialModule
  ]
})
export class TablesModule { } 
