import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidemenu',
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrls: ['./dashboard-sidemenu.component.css']
})
export class DashboardSidemenuComponent implements OnInit {

  menuCollapsed: boolean = false;
  menuActivated: string = 'home';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
  }

  activatedMenu(menu: string) {
    this.menuActivated = menu;
    // Implementar de acordo com a disponibilidade dos menus
  }

  navigate(path: string) {
    this.router.navigate([`dashboard/${path}`]);
  }
}
