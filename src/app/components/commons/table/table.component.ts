import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as XLSX from 'xlsx';

interface TableRow {
  value: any;
  class?: string;
}

interface DataPages {
  recordsTotal: number;
  perPage: number;
  currentPage: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() exportTitle: string = '';
  @Input() hasExport: boolean = false;
  @Input() hasEntries: boolean = true;
  @Input() hasSearch: boolean = true;
  @Input() hasFooter: boolean = true;
  @Input() tableSubTitle: string = '';
  @Input() tableHeaders: string[] = [];
  @Input() pages: DataPages = {} as DataPages;
  @Output() changePagination = new EventEmitter<number>();
  @Output() changePageQtde = new EventEmitter<number>();
  @Output() changeSearch = new EventEmitter<string>();

  maxVisiblePages: number = 5;
  dataPages: number = 0;
  pageNumbers: number[] = [];
  timeout: any;

  constructor() { }

  ngOnInit(): void {
    this.dataPages = Math.ceil(this.pages.recordsTotal / this.pages.perPage);
    this.getPages();
  }

  // onInputChange(event: Event) {
  //   const inputValue = (event.target as HTMLInputElement).value;
  //   this.changePagination.emit(Number(inputValue));
  // }

  getPages() {
    const startPage = Math.max(1, this.pages.currentPage - Math.floor(this.maxVisiblePages / 2));
    let endPage = this.maxVisiblePages;
    if (this.maxVisiblePages < this.dataPages) {
      endPage = Math.min(this.pages.recordsTotal, startPage + (this.maxVisiblePages -1));
    } else {
      endPage = Math.min(this.pages.recordsTotal, startPage + (this.dataPages -1));
    }

    for (let i = startPage; i <= endPage; i++) {
      this.pageNumbers.push(i);
    }
  }

  goNext() {
    if (this.pages.currentPage != this.dataPages) {
      this.changePagination.emit(this.pages.currentPage < this.dataPages ? this.pages.currentPage + 1 : this.dataPages);
      if (this.pageNumbers[this.pageNumbers.length - 1] < this.pages.currentPage && this.pages.currentPage != this.dataPages) {
        this.pageNumbers = this.pageNumbers.map(element => {
          return ++element;
        });
      }
    }
  }

  goBack() {
    if (this.pages.currentPage != 1) {
      this.changePagination.emit(this.pages.currentPage > 1 ? this.pages.currentPage - 1 : this.pages.currentPage);
      if (this.pageNumbers[this.pageNumbers.length - 1] > this.pages.currentPage && this.pageNumbers[0] > 1) {
        this.pageNumbers = this.pageNumbers.map(element => {
          return --element;
        });
      }
    }
  }

  changePerPage(perPage: string) {
    this.pages.currentPage = 1;
    this.pages.perPage = Number(perPage);
    this.changePageQtde.emit(this.pages.perPage);
    this.dataPages = Math.ceil(this.pages.recordsTotal / this.pages.perPage);
    this.pageNumbers = [];
    this.getPages();
  }

  getSearch(search: string) {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.changeSearch.emit(search);
    }, 1000);
  }

  exportPrint() {
    const printContents = document.getElementById('table')!.outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow?.document.write(`
      <html>
        <head>
          <title>${this.exportTitle}</title>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              font-size: 18px;
                text-align: left;
            }

            th, td {
              padding: 10px;
              border-bottom: 1px solid #dddddd;
            }

            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    newWindow?.document.close();

    newWindow?.addEventListener('afterprint', function() {
      newWindow.close();
    });

    newWindow?.print();
  }

  exportCSV() {
    const table = document.getElementById('table') as HTMLTableElement;
    let csv = [];
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      let row = [], cols = rows[i].cells;

      for (let j = 0; j < cols.length; j++) {
          // Converte o select em texto se encontrar ele
          let selectInput = cols[j].querySelector('app-select-input');
          if (selectInput) {
              let select = selectInput.querySelector('select');
              row.push(select?.options[select.selectedIndex].text);
          } else {
              row.push(cols[j].innerText);
          }
      }
      csv.push(row.join(","));
    }

    let csvFile = new Blob([csv.join("\n")], {type: "text/csv"});
    let downloadLink = document.createElement("a");
    downloadLink.download = `${this.exportTitle}.csv`;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  exportExcel() {
    const table = document.getElementById('table') as HTMLTableElement;
    let cloneTable = table.cloneNode(true) as HTMLTableElement;

    for (let i = 0; i < table.rows.length; i++) {
      let originalRow = table.rows[i];
      let cloneRow = cloneTable.rows[i];

      for (let j = 0; j < originalRow.cells.length; j++) {
        // Converte o select em texto se encontrar ele
        let originalSelect = originalRow.cells[j].querySelector('app-select-input select') as HTMLSelectElement;
        let cloneSelect = cloneRow.cells[j].querySelector('select');

        if (originalSelect && cloneSelect) {
          let selectedOptionText = originalSelect.options[originalSelect.selectedIndex].text;
          cloneRow.cells[j].innerText = selectedOptionText;
        }
      }
    }

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(cloneTable);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${this.exportTitle}.xlsx`);
  }
}
