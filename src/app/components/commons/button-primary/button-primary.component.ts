import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input() typeBtn: 'submit' | 'reset' | 'button' | undefined;
  @Input() textBtn: string | number = '';
  @Input() nameBtn?: string;
  @Input() idBtn?: string;
  @Input() btnWidth?: string = 'w-full';
  @Input() iconClass?: string = '';
  @Input() hasIconLeft?: boolean = false;
  @Input() hasIconRight?: boolean = false;
  @Input() btnBgColor?: string = 'bg-red-700';
  @Input() disabledBtn?: boolean;
  @Input() hasLoading?: boolean = false;
  @Output() onClick = new EventEmitter<void>();
  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPrevStep = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
