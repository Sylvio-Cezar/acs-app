import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LaborScopeComponent } from './obligations/labor-scope/labor-scope.component';
import { TaxRatesComponent } from './icms/tax-rates/tax-rates.component';
import { VacationComponent } from './labor/vacation/vacation.component';
import { IrpfComponent } from './federal/irpf/irpf.component';
import { HomeComponent } from './home/home.component';
import { DctfWebComponent } from './labor/dctf-web/dctf-web.component';
import { EfdReinfComponent } from './labor/efd-reinf/efd-reinf.component';
import { FamilySalaryComponent } from './labor/family-salary/family-salary.component';
import { FgtsComponent } from './labor/fgts/fgts.component';
import { ThirteenFirstSalaryComponent } from './labor/thirteen-first-salary/thirteen-first-salary.component';
import { UnionContributionsComponent } from './labor/union-contributions/union-contributions.component';
import { AuditComponent } from './audit/audit.component';
import { EfdReinfFederalComponent } from './federal/efd-reinf-federal/efd-reinf-federal.component';
import { DctfWebFederalComponent } from './federal/dctf-web-federal/dctf-web-federal.component';
import { PisCofinsComponent } from './federal/pis-cofins/pis-cofins.component';
import { SimplesNacionalComponent } from './federal/simples-nacional/simples-nacional.component';
import { MeiComponent } from './federal/mei/mei.component';
import { EcdComponent } from './federal/ecd/ecd.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'audit',
        component: AuditComponent
      },
      {
        path: 'irpf',
        component: IrpfComponent
      },
      {
        path: 'efd-reinf-federal',
        component: EfdReinfFederalComponent
      },
      {
        path: 'dctfweb-federal',
        component: DctfWebFederalComponent
      },
      {
        path: 'pis-cofins',
        component: PisCofinsComponent
      },
      {
        path: 'simples-nacional',
        component: SimplesNacionalComponent
      },
      {
        path: 'mei',
        component: MeiComponent
      },
      {
        path: 'ecd',
        component: EcdComponent
      },
      {
        path: 'ferias-coletivas',
        component: VacationComponent
      },
      {
        path: 'dctfweb',
        component: DctfWebComponent
      },
      {
        path: 'efd-reinf',
        component: EfdReinfComponent
      },
      {
        path: 'salario-familia',
        component: FamilySalaryComponent
      },
      {
        path: 'fgts-digital',
        component: FgtsComponent
      },
      {
        path: 'decimo-terceiro',
        component: ThirteenFirstSalaryComponent
      },
      {
        path: 'contribuicoes-sindicais',
        component: UnionContributionsComponent
      },
      {
        path: 'aliquotas-beneficios',
        component: TaxRatesComponent
      },
      {
        path: 'ambito-trabalhista',
        component: LaborScopeComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
