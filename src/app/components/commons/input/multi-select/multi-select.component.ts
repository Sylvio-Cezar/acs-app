import { Component, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements AfterViewInit {
  @Input() multiOptions: any[] = [];
  @Input() textLabel: string = '';
  @Input() defaultValue?: any[];
  @Input() inputError?: true | false;
  @Input() inputErrorMessage?: string | null;
  @Input() inputRequired?: true | false;
  @Output() changeOptions = new EventEmitter<string[]>();

  inputTouched: boolean = false;

  // controlar dropdown aberto/fechado
  isDropdownOpen: boolean = false;
  selectedOptions: any[] = [];

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.selectedOptions = this.defaultValue ? this.defaultValue : [];
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  // function pra abrir ou fechar dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // function pra selecionar as multiOptions
  selectOption(option: string) {
    // verifica se a opção ja foi selcionada
    if (!this.selectedOptions.includes(option)) {
      // Add option na lista
      this.selectedOptions.push(option);
      // umca coisa opcional fiz pra remover da lista quando ja ta selecionado, para n confudir o usuario
      this.removeFromAvailableOptions(option);
    }
    this.changeOptions.emit(this.selectedOptions);
  }

  // Método para remover uma opção
  removeOption(option: string) {
    // pega o indice da optpion na lista de opções selecionadas
    const index = this.selectedOptions.indexOf(option);
    // verifica se a opção está na lista de opções selecionadas
    if (index !== -1) {
      // remove a opção da lista de opções selecionadas
      this.selectedOptions.splice(index, 1);
      // devolve a opçãopara lista de opções disponíveis..
      //complemanta a parte de cima onde eu removo da lista se ja foi selecionado, aqui devolve
      this.addToAvailableOptions(option);
    }
    this.changeOptions.emit(this.selectedOptions);
  }

  // function para remover uma opção da lista de opções disponíveis chamda la em cima
  removeFromAvailableOptions(option: string) {
    // mesma ideia do método removeOption, acha o index e remove
    const index = this.multiOptions.indexOf(option);
    if (index !== -1) {
      this.multiOptions.splice(index, 1);
    }
  }

  // function chamada la em cima pra devolver a option excluida de volta pra lista
  addToAvailableOptions(option: string) {
    // add a opção de volta à lista de opções disponíveis
    this.multiOptions.push(option);
    // ordena a lista de opções disponíveis mas é opcional fiz pq achei que ficava bom
    this.multiOptions.sort();
  }

  // verifica se um item é o primeiro da lista de opções
  isFirstItem(item: string): boolean {
    return this.multiOptions.indexOf(item) === 0;
  }

  // verifica se um item é o último da lista de opções
  lastItem(item: string): boolean {
    return this.multiOptions.indexOf(item) === this.multiOptions.length - 1;
  }

  // verifica se uma opção está selecionada
  isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }
}
