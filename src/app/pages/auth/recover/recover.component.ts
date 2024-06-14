import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css'
})
export class RecoverComponent implements OnInit{
  user: any = {};
  formValid = {
    email: false,
    emailPattern: false,
  }
  pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  emailError: string = '';
  recoverTime = 0;

  constructor(
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.getFormValues
  }

  getFormValues() {
    this.formValid = {
      email: this.user.email ? true : false,
      emailPattern: this.pattern.test(this.user.email),
    }
  }

  getAllValid() {
    for (const element of Object.values(this.formValid)) {
      if (element === false) {
        return false;
      }
    }
    if (this.recoverTime > 0) {
      return false;
    }
    return true;
  }

  sendRecover(): void {
    this.recoverTime = 60;
    let interval = setInterval(() => {
      console.log(this.recoverTime)
      this.recoverTime -= 1;
      if (this.recoverTime == 0) {
        clearInterval(interval);
      }
    }, 1000);

    this.messageService.successMessage('Pedido de recuperação enviado com sucesso! Por favor verifique seu e-mail.');
  }

  getInputEmail(email: string) {
    this.user.email = email;

    this.formValid.email = this.user.email ? true : false;
    this.formValid.emailPattern = this.pattern.test(this.user.email);

    this.emailError = !this.formValid.emailPattern && this.formValid.email ? 'Insira um e-mail válido' :
    !this.formValid.email ? 'O campo e-mail é obrigatório' : '';
  }
}
