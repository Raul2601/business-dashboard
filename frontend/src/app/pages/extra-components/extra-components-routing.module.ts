import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExtraComponentsComponent } from './extra-components.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnersComponent } from './spinners/spinners.component';

const routes: Routes = [
  {
    path: '',
    component: ExtraComponentsComponent,
    children: [
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent
      },
      {
        path: 'spinner',
        component: SpinnersComponent
      },
      {
        path: 'alert',
        component: AlertsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraComponentsRoutingModule { }
