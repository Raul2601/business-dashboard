import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'stepper',
        component: StepperComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'accordion',
        component: AccordionComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
