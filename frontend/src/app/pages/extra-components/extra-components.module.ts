import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraComponentsRoutingModule } from './extra-components-routing.module';
import { ExtraComponentsComponent } from './extra-components.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module'
import { MaterialModule } from '../../shared/material.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [ExtraComponentsComponent, CalendarComponent, ProgressBarComponent, SpinnersComponent, AlertsComponent],
  imports: [
    CommonModule,
    ExtraComponentsRoutingModule,
    FormsModule,
    NgbModule,
    CoreModule,
    MaterialModule
  ],
})
export class ExtraComponentsModule { }
