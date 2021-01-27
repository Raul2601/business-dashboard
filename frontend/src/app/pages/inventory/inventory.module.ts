import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { TableComponent } from './table/table.component';

import { MaterialModule } from '../../shared/material.module'
import { CoreModule } from 'src/app/core/core.module';
import { NgTableComponent } from './ng-table/ng-table.component';

import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [InventoryComponent, TableComponent, NgTableComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class InventoryModule { }
