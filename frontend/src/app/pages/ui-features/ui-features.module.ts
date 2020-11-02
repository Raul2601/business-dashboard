import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { GridComponent } from './grid/grid.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from '../../shared/material.module';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component'

@NgModule({
  declarations: [GridComponent, IconsComponent, TypographyComponent],
  imports: [
    CommonModule,
    UiFeaturesRoutingModule,
    CoreModule,
    MaterialModule
  ]
})
export class UiFeaturesModule { }
