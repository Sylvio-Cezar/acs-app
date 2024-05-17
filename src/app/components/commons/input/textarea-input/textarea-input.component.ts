import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.css']
})
export class TextareaInputComponent implements OnInit {

  @Input() inputLabel: string = '';
  @Input() textLabel: string = '';
  @Input() inputPlaceholder?: string = '';
  @Input() inputName: string = '';
  @Input() inputId?: string = '';
  @Input() defaultValue?: string = '';
  @Input() inputReadOnly?: boolean = false;
  @Input() inputError?: true | false;
  @Input() inputErrorMessage?: string | null;
  @Input() inputRequired?: true | false;
  @Input() inputRows: string = '5';
  @Input() inputCols?: string = '';
  @Output() valueChange = new EventEmitter<string>();

  inputTouched: boolean = false;
  inputValue: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultValue'] && changes['defaultValue'].firstChange) {
      this.defaultValue = "";
    }
  }

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.inputValue);
  }

  ngOnInit(): void {
  }

}
