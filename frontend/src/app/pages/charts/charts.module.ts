import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [ChartsComponent, EchartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgbModule,
    CoreModule,
    MaterialModule
  ]
})
export class ChartsModule { }
