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
import { ChartjsComponent } from './chartjs/chartjs.component';
import { LineChartComponent } from './chartjs/line-chart/line-chart.component';
import { ChartsModule as ChartModule } from 'ng2-charts';
import { BarChartComponent } from './chartjs/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './chartjs/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './chartjs/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './chartjs/polar-area-chart/polar-area-chart.component';
import { D3Component } from './d3/d3.component';
import { D3LineComponent } from './d3/d3-line/d3-line.component';
import { D3BarChartComponent } from './d3/d3-bar-chart/d3-bar-chart.component';
import { D3StackedBarChartComponent } from './d3/d3-stacked-bar-chart/d3-stacked-bar-chart.component';

@NgModule({
  declarations: [ChartsComponent, EchartsComponent, StackedAreaComponent, BarAnimationComponent, LineComponent, SimpleLineComponent, PieComponent, PieCustomizedComponent, ChartjsComponent, LineChartComponent, BarChartComponent, DoughnutChartComponent, RadarChartComponent, PolarAreaChartComponent, D3Component, D3LineComponent, D3BarChartComponent, D3StackedBarChartComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgbModule,
    CoreModule,
    MaterialModule,
    ChartModule
  ]
})
export class ChartsModule { }
