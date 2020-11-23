import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { TableComponent } from './table/table.component';

import { MaterialModule } from '../../shared/material.module'
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [InventoryComponent, TableComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class InventoryModule { }
