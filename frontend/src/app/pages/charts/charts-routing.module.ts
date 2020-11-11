import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartsComponent } from './charts.component';
import { D3Component } from './d3/d3.component';
import { EchartsComponent } from './echarts/echarts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'echarts',
        component: EchartsComponent
      },
      {
        path: 'chartjs',
        component: ChartjsComponent
      },
      {
        path: 'd3',
        component: D3Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
