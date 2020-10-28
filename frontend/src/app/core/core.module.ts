import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuItemComponent } from './left-menu/menu-item/menu-item.component';

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent
  ]
})
export class CoreModule { }
