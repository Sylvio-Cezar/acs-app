import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cst',
  templateUrl: './cst.component.html',
  styleUrl: './cst.component.css'
})
export class CstComponent implements OnInit {

  pages = {
    recordsTotal: 9,
    perPage: 10,
    currentPage: 1
  };
  dataTable: Array<any> = [];
  tableHeaders: Array<string> = [] as Array<string>;

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.tableHeaders = ["Código", "Descrição", "Explicação"];

    this.dataTable = [
      {
        id: 0,
        desc: "Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8",
        info: "Este código aplica-se a mercadorias de origem nacional, sem a utilização de insumos importados do exterior."
      },
      {
        id: 1,
        desc: "Estrangeira - Importação direta, exceto a indicada no código 6",
        info: "Utilizado para mercadorias importadas diretamente, tanto para o documento fiscal de importação quanto para o documento fiscal emitido pelo importador ao dar saída às mercadorias importadas que não passaram por processo industrial após a importação."
      },
      {
        id: 2,
        desc: "Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7",
        info: "Utilizado por revendedores de mercadorias importadas adquiridas no mercado interno, que não passaram por processo industrial no Brasil após a importação."
      },
      {
        id: 3,
        desc: "Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%",
        info: "Aplicado a mercadorias industrializadas no Brasil, cujo Conteúdo de Importação seja superior a 40% e até 70%"
      },
      {
        id: 4,
        desc: "Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos",
        info: "Utilizado para mercadorias fabricadas no Brasil de acordo com os Processos Produtivos Básicos estabelecidos pelo Decreto-Lei n° 288/67 e legislações subsequentes."
      },
      {
        id: 5,
        desc: "Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%",
        info: "Aplicado a mercadorias industrializadas no Brasil, cujo Conteúdo de Importação seja igual ou inferior a 40%."
      },
      {
        id: 6,
        desc: "Estrangeira - Importação direta, sem similar nacional, constante em lista de Resolução GECEX e gás natural",
        info: "Utilizado para mercadorias importadas sem similar nacional, bem como operações com gás natural importado."
      },
      {
        id: 7,
        desc: "Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista de Resolução GECEX e gás natural",
        info: "Utilizado por revendedores de mercadorias importadas sem similar nacional, bem como operações com gás natural importado."
      },
      {
        id: 8,
        desc: "Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%",
        info: "Aplicado a mercadorias industrializadas no Brasil, cujo Conteúdo de Importação seja superior a 70%."
      },
    ];
  }

}
