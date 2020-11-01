import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { UiFeaturesComponent } from './ui-features.component'
import { IconsComponent } from './icons/icons.component'

const routes: Routes = [
  {
    path: '',
    component: UiFeaturesComponent,
    children: [{
      path: 'grid',
      component: GridComponent,
    },
    {
      path: 'icons',
      component: IconsComponent,
    },
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      // },
      // {
      //   path: 'search-fields',
      //   component: SearchComponent,
      // }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiFeaturesRoutingModule { }
