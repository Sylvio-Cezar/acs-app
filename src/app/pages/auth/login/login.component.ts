import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any = {};
  authEmail: string = "admin@acs.com.br";
  authPass: string = "AdminACS2024#";
  formValid = {
    email: false,
    emailPattern: false,
    password: false,
  }
  pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  emailError: string = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    let userLogged = this.authService.getUserData();
    if (userLogged.id) {
      this.redirect();
    }
  }

  ngOnInit(): void {
    this.getFormValues
  }

  getFormValues() {
    this.formValid = {
      email: this.user.email ? true : false,
      emailPattern: this.pattern.test(this.user.email),
      password: this.user.password ? true : false,
    }
  }

  getAllValid() {
    for (const element of Object.values(this.formValid)) {
      if (element === false) {
        return false;
      }
    }
    return true;
  }

  login(): void {
    if (this.user.email == this.authEmail && this.user.password == this.authPass) {
      this.messageService.successMessage('Login efetuado com sucesso.');
      this.redirect();
    } else {
      this.messageService.errorMessage('Usuário e/ou senha incorretos!');
    }
  }

  getInputEmail(email: string) {
    this.user.email = email;

    this.formValid.email = this.user.email ? true : false;
    this.formValid.emailPattern = this.pattern.test(this.user.email);

    this.emailError = !this.formValid.emailPattern && this.formValid.email ? 'Insira um e-mail válido' :
    !this.formValid.email ? 'O campo e-mail é obrigatório' : '';
  }

  getInputPass(pass: string) {
    this.user.password = pass;

    this.formValid.password = this.user.password ? true : false;
  }

  redirect(): void {
    this.user.id = 1;
    this.authService.setUserData(this.user);
    this.router.navigate(['/dashboard/home']);
  }
}
