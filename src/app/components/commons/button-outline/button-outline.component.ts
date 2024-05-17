import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.css']
})
export class ButtonOutlineComponent implements OnInit {

  @Input() typeBtn: 'submit' | 'reset' | 'button' | undefined;
  @Input() textBtn: string = '';
  @Input() nameBtn?: string;
  @Input() idBtn?: string;
  @Input() btnWidth?: string = 'w-full';
  @Input() disabledBtn?: boolean;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
