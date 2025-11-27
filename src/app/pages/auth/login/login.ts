import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

import {  AuthService } from "../../../services/auth.service";
import { AppFloatingConfigurator } from '@/layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-login',
  imports: [ButtonModule,PasswordModule,CheckboxModule, InputTextModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  alias: string = "";
  clave: string = "";

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.alias, this.clave).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/propertys']);
      },
      error: () => alert('credenciales invalidas')
    });
  }

}
