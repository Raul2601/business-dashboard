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
import { StackedAreaComponent } from './echarts/stacked-area/stacked-area.component';
import { BarAnimationComponent } from './echarts/bar-animation/bar-animation.component';
import { LineComponent } from './echarts/line/line.component';
import { SimpleLineComponent } from './echarts/simple-line/simple-line.component';
import { PieComponent } from './echarts/pie/pie.component';
import { PieCustomizedComponent } from './echarts/pie-customized/pie-customized.component';

@NgModule({
  declarations: [ChartsComponent, EchartsComponent, StackedAreaComponent, BarAnimationComponent, LineComponent, SimpleLineComponent, PieComponent, PieCustomizedComponent],
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
