import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../components/commons/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        backdrop: true,
        title: 'Exclusão de dados',
        textBody: 'Você tem certeza que deseja excluir sua conta permanentemente?',
        btnConfirm: 'Exluir Conta',
        btnCancel: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Ação confimada')
      } else {
        console.log('Ação cancelada')
      }
    });
  }

  getInputEmail(email: string) {
    console.log(email)
  }

  getInputPass(password: string) {
    console.log(password)
  }

  submitLogin() {
    console.log('faz o submit');

  }

}
