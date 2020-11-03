import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ExtraComponentsComponent } from './extra-components.component';

const routes: Routes = [
  {
    path: '',
    component: ExtraComponentsComponent,
    children: [
      {
        path: 'calendar',
        component: CalendarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraComponentsRoutingModule { }
