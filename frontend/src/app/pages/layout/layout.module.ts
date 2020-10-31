import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { StepperComponent } from './stepper/stepper.component';
import { MaterialModule } from '../../shared/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CoreModule } from 'src/app/core/core.module';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [LayoutComponent, StepperComponent, ListComponent, AccordionComponent, TabsComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSliderModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class LayoutModule { }
