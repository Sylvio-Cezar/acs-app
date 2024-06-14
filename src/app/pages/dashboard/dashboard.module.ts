import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { IrpfComponent } from './irpf/irpf.component';
import { LaborScopeComponent } from './labor-scope/labor-scope.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';
import { VacationComponent } from './vacation/vacation.component';

@NgModule({
  declarations: [
    HomeComponent,
    IrpfComponent,
    LaborScopeComponent,
    TaxRatesComponent,
    VacationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
