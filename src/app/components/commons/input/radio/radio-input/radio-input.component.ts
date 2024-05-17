import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { RadioOptionComponent } from '../radio-option/radio-option.component';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent {
  @Input() inputLabel: string = '';
  @Input() textLabel: string = '';
  @Input() inputReadOnly?: boolean = false;
  @Input() inputError?: true | false;
  @Input() inputErrorMessage?: string | null;
  @Input() inputRequired?: true | false;
  @Output() valueChange = new EventEmitter<string | number>();
  @ContentChildren(RadioOptionComponent) options!: QueryList<RadioOptionComponent>;

  constructor() { }

  onInputChange(index: number) {
    const option = this.options.get(index);
    if (option) {
      this.valueChange.emit(option.radioValue);
    }
  }

}
