import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() modalTitle: string = '';
  @Input() primaryBtnTitle: string = '';
  @Input() outlineBtnTitle: string = '';
  @Input() primaryBtnDisabled: boolean = false;
  @Input() outlineBtnDisabled: boolean = false;
  @Input() hasOutlineBtn: boolean = true;
  @Input() hasPrimaryBtn: boolean = true;
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onConfirm = new EventEmitter<boolean>();

  constructor() { }

  cancelModal() {
    this.onCancel.emit(false);
  }

  confirmModal() {
    this.onConfirm.emit(false);
  }

}
