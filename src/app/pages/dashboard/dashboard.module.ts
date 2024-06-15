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

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    DctfWebComponent,
    EfdReinfComponent,
    FamilySalaryComponent,
    FgtsComponent,
    ThirteenFirstSalaryComponent,
    UnionContributionsComponent,
    VacationComponent,
    IrpfComponent,
    LaborScopeComponent,
    TaxRatesComponent,
    EfdReinfFederalComponent,
    DctfWebFederalComponent,
    PisCofinsComponent,
    SimplesNacionalComponent,
    MeiComponent,
    EcdComponent,
    AuditComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
