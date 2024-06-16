import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { IrpfComponent } from './federal/irpf/irpf.component';
import { LaborScopeComponent } from './obligations/labor-scope/labor-scope.component';
import { TaxRatesComponent } from './icms/tax-rates/tax-rates.component';
import { VacationComponent } from './labor/vacation/vacation.component';
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
import { IcsmFuelComponent } from './icms/icsm-fuel/icsm-fuel.component';
import { ImportedComponent } from './icms/imported/imported.component';
import { TaxDiffComponent } from './icms/tax-diff/tax-diff.component';
import { TaxReplacementComponent } from './icms/tax-replacement/tax-replacement.component';
import { FederalScopeComponent } from './obligations/federal-scope/federal-scope.component';
import { StateScopeComponent } from './obligations/state-scope/state-scope.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AuditComponent,
    DctfWebComponent,
    EfdReinfComponent,
    FamilySalaryComponent,
    FgtsComponent,
    ThirteenFirstSalaryComponent,
    UnionContributionsComponent,
    VacationComponent,
    IrpfComponent,
    TaxRatesComponent,
    EfdReinfFederalComponent,
    DctfWebFederalComponent,
    PisCofinsComponent,
    SimplesNacionalComponent,
    MeiComponent,
    EcdComponent,
    CfopComponent,
    CstComponent,
    DestdaComponent,
    DifalComponent,
    IcsmFuelComponent,
    ImportedComponent,
    TaxDiffComponent,
    TaxReplacementComponent,
    LaborScopeComponent,
    FederalScopeComponent,
    StateScopeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
