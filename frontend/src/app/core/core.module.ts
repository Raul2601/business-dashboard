import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuItemComponent } from './left-menu/menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent, MenuItemComponent, FooterComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
    FooterComponent
  ]
})
export class CoreModule { }
