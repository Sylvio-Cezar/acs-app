import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {

  @Input() typeBtn: 'submit' | 'reset' | 'button' | undefined;
  @Input() textBtn: string | number = '';
  @Input() nameBtn?: string;
  @Input() idBtn?: string;
  @Input() btnWidth?: string = 'w-fit';
  @Input() iconClass?: string = '';
  @Input() hasIconLeft?: boolean = false;
  @Input() hasIconRight?: boolean = false;
  @Input() btnDisabled?: boolean = false;
  @Output() onClick = new EventEmitter<void>();
  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPrevStep = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.onNextStep.emit(); // Emite o evento de próximo passo
  }

  prevStep() {
    this.onPrevStep.emit(); // Emite o evento de passo anterior
  }

}
