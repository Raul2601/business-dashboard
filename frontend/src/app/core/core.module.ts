import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuItemComponent } from './left-menu/menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardHeaderComponent } from './card-header/card-header.component';

@NgModule({
  declarations: [HeaderComponent, LeftMenuComponent, MenuItemComponent, FooterComponent, CardHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
    FooterComponent,
    CardHeaderComponent,
  ]
})
export class CoreModule { }
