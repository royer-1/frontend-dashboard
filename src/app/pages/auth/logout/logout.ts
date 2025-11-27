import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-logout',
  imports: [CommonModule, ButtonModule],
  templateUrl: './logout.html',
  styleUrl: './logout.scss'
})
export class Logout {

  alias: string = '';
  nombre: string = '';

  constructor(private router: Router) {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsed = JSON.parse(userData);
      this.alias = parsed.alias;
      this.nombre = parsed.nombre;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

}
