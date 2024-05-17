import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ModalConfig {
  backdrop: boolean,
  title: string,
  textBody: string,
  btnConfirm: string,
  btnCancel: string
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  backdrop = false;
  modalConfig: ModalConfig = {} as ModalConfig

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalConfig = data;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.backdrop = this.data.backdrop
    }, 160);
  }

  closeModal(isConfirm: boolean) {
    this.backdrop = false;
    this.dialogRef.close(isConfirm);
  }
}
