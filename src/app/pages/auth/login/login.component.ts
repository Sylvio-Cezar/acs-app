import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any = {};
  authEmail: string = "admin@acs.com.br";
  authPass: string = "AdminACS2024#";

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
    // let userLogged = this.authService.getUserData();
    // if (userLogged.id) {
    //   this.redirect();
    // }
  }

  ngOnInit(): void {

  }

  login(): void {
    // this.loadingService.showLoading();
    // this.authService.login(this.user).subscribe({
    //   next: (result: any) => {
    //     this.authService.setToken(result.access_token);
        this.messageService.successMessage('Login efetuado com sucesso.');
        this.redirect();
    //   },
    //   error: (err: any) => console.log(err),
    // }).add(() => {
    //   this.loadingService.hideLoading()
    // });
  }

  getInputEmail(email: string) {
    this.user.email = email;
  }

  getInputPass(pass: string) {
    this.user.password = pass;
  }

  redirect(): void {
    //   this.loadingService.showLoading();
    //   this.authService.userLogged().subscribe({
    //     next: res => {
    //       this.authService.setUserData(res.data);
          this.router.navigate(['/dashboard/home'])
    //     }
    //   }).add(() => this.loadingService.hideLoading())
    // }
  }
}
