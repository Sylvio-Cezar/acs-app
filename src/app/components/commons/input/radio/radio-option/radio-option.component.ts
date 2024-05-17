import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.css']
})
export class RadioOptionComponent {

  @Input() radioId: string = '';
  @Input() radioName: string = '';
  @Input() radioValue?: string | number;
  @Input() radioLabel: string = '';
  @Input() radioChecked: boolean = false;
  @Output() valueChange = new EventEmitter<string | number>();

  constructor() { }

  onInputChange() {
    this.valueChange.emit(this.radioValue);
  }

}
