import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

import { MaterialModule } from '../../shared/material.module'
import { CoreModule } from 'src/app/core/core.module';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent, FormInputsComponent, FormLayoutsComponent, ButtonsComponent, DatePickerComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
