import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { StepperComponent } from './stepper/stepper.component';
import { MaterialModule } from '../../shared/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, StepperComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSliderModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
