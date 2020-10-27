import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent
  ]
})
export class CoreModule { }
