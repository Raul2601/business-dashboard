import { Component, } from '@angular/core';
import { MenuItem } from '../../pages/menu-item'
import { PagesMenuService } from '../../pages/pages-menu.service'

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {

  menu: MenuItem[];

  constructor(private pagesMenuService: PagesMenuService) {
    this.initMenu();
  }

  initMenu() {
    this.pagesMenuService.getMenu()
      .subscribe(menu => {
        this.menu = menu;
      });
  }
}
