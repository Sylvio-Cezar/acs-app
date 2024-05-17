import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

export type InputType =
  'button' | 'checkbox' | 'color' | 'date' | 'file' | 'email' |
  'hidden' | 'password' | 'radio' | 'range' | 'reset' | 'text' | 'tel' | 'number';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
})

export class BasicInputComponent implements OnChanges {
  //inputs and outputs
  @Input() inputType: InputType | undefined;
  @Input() inputLabel: string = '';
  @Input() textLabel: string = '';
  @Input() inputPlaceholder?: string = '';
  @Input() inputName: string = '';
  @Input() inputId?: string = '';
  @Input() defaultValue?: string | number = '';
  @Input() inputAutocomplete?: string = '';
  @Input() inputReadOnly?: boolean = false;
  @Input() iconClass?: string = '';
  @Input() hasIconLeft?: boolean = false;
  @Input() hasIconRight?: boolean = false;
  @Input() inputError?: true | false;
  @Input() inputErrorMessage?: string | null;
  @Input() inputRequired?: true | false;
  @Output() valueChange = new EventEmitter<string>();

  isToShowPass: boolean = false;
  isPassText: boolean = false;
  inputTouched: boolean = false;
  inputValue: any;
  emailPattern: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultValue'] && changes['defaultValue'].firstChange && this.inputType != 'date') {
      if (this.inputType != 'number') {
        this.defaultValue = "";
      }
    }
  }

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.inputValue);
  }

  showPass(isToShowPass: boolean) {
    this.isToShowPass = isToShowPass;
    this.isPassText = true;
    this.isToShowPass ? this.inputType = 'text' : this.inputType = 'password'
  }
}
