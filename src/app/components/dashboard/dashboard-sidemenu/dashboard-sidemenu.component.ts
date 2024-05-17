import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidemenu',
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrls: ['./dashboard-sidemenu.component.css']
})
export class DashboardSidemenuComponent implements OnInit {

  menuCollapsed: boolean = false;
  menuActivated: string = 'dashboard';
  subMenuActivated: string = '';
  menuExpand: { [key: string]: boolean } = { 'users': false, 'vacancies': false };

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
  }

  activatedMenu(menu: string) {
    this.menuActivated = menu;
    for (const key in this.menuExpand) {
      if (Object.prototype.hasOwnProperty.call(this.menuExpand, key)) {
        if (key !== menu) {
          this.menuExpand[key] = false;
        }
      }
    }
    this.menuExpand[menu] = !this.menuExpand[menu];
  }

  setSubMenuActivated(menu: string) {
    this.subMenuActivated = menu;
  }
}
