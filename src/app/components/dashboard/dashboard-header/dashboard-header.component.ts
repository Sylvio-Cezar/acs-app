import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {

  isMobileMenuOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  constructor(
    private messageService: MessageService,
    private router: Router,
  ) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  isCurrentPage(page: string): boolean {
    // Lógica para verificar a página atual
    return true; // Substitua pela sua lógica real
  }

  logout() {
    // Lógica para logout
  }


}
