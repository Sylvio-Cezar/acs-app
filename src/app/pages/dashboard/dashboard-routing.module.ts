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
import { CfopComponent } from './icms/cfop/cfop.component';
import { CstComponent } from './icms/cst/cst.component';
import { DestdaComponent } from './icms/destda/destda.component';
import { DifalComponent } from './icms/difal/difal.component';
import { TaxDiffComponent } from './icms/tax-diff/tax-diff.component';
import { IcsmFuelComponent } from './icms/icsm-fuel/icsm-fuel.component';
import { ImportedComponent } from './icms/imported/imported.component';
import { TaxReplacementComponent } from './icms/tax-replacement/tax-replacement.component';
import { StateScopeComponent } from './obligations/state-scope/state-scope.component';
import { FederalScopeComponent } from './obligations/federal-scope/federal-scope.component';

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
        path: 'ambito-federal',
        component: FederalScopeComponent
      },
      {
        path: 'ambito-estadual',
        component: StateScopeComponent
      },
      {
        path: 'cfop',
        component: CfopComponent
      },
      {
        path: 'cst',
        component: CstComponent
      },
      {
        path: 'destda',
        component: DestdaComponent
      },
      {
        path: 'difal-nao-contribuinte',
        component: DifalComponent
      },
      {
        path: 'diferencial-aliquotas',
        component: TaxDiffComponent
      },
      {
        path: 'icms-monofasico-combustivel',
        component: IcsmFuelComponent
      },
      {
        path: 'importados',
        component: ImportedComponent
      },
      {
        path: 'substituicao-tributaria',
        component: TaxReplacementComponent
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
