import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent {

  @Input() textLabel: string = '';
  @Input() selectName?: string = '';
  @Input() selectId?: string = '';
  @Input() selectDisabled?: boolean = false;
  @Input() hasDefaultOption?: true | false;
  @Input() selectOptions: Array<any> = [];
  @Input() optionText?: Array<any> = [];
  @Input() optionValue?: Array<any> = [];
  @Input() selectValue?: any;
  @Input() labelFloating?: boolean = false;
  @Input() customBGColor?: string = '';
  @Input() inputError?: true | false;
  @Input() inputErrorMessage?: string | null;
  @Input() inputRequired?: true | false;
  @Output() valueChange = new EventEmitter<string>();

  inputTouched: boolean = false;
  inputValue: any;

  constructor() { }

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.inputValue);
  }

}
