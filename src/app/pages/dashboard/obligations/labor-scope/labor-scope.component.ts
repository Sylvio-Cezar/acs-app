import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labor-scope',
  templateUrl: './labor-scope.component.html',
  styleUrl: './labor-scope.component.css'
})
export class LaborScopeComponent implements OnInit{

  constructor(
    private router: Router
  ) {}

  pages = {
    recordsTotal: 4,
    perPage: 10,
    currentPage: 1
  };
  dataTable: Array<any> = [];
  tableHeaders: Array<string> = [] as Array<string>;

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.tableHeaders = ["Tipo", "Obrigatoriedade", "Periodicidade", "Prazo"];

    this.dataTable = [
      {
        type: "DCFTWeb",
        mandatory: "Empresas/Equiparadas",
        frequency: "Mensal",
        time: "Dia 15",
        route: "dctfweb"
      },
      {
        type: "EFD - Reinf",
        mandatory: "Empresas/Equiparadas",
        frequency: "Mensal",
        time: "Dia 15",
        route: "efd-reinf"
      },
      {
        type: "FGTS Digital",
        mandatory: "Empresas/Equiparadas",
        frequency: "Mensal",
        time: "Dia 20 (a partir da implantação)",
        route: "fgts-digital"
      },
    ];
  }

  navigate(path: string) {
    this.router.navigate([`dashboard/${path}`]);
  }

}
