import { MessageService } from './../../../services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css'
})
export class AuditComponent {

  files: string[] = [];

  constructor(
    private messageService: MessageService
  ) {}

  onSend() {
    this.files = [];
    this.messageService.successMessage("Arquivo(s) enviado(s) com sucesso! Por favor aguarde 15~20 minutos pelo e-mail de confirmação.");
  }

  changeFiles(files: string[]) {
    this.files = files;
  }

}
