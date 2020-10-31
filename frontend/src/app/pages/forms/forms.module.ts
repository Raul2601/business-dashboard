import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

import { MaterialModule } from '../../shared/material.module'
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [FormsComponent, FormInputsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class FormsModule { }
