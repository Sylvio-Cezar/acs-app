import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LaborScopeComponent } from './labor-scope/labor-scope.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';
import { VacationComponent } from './vacation/vacation.component';
import { IrpfComponent } from './irpf/irpf.component';
import { HomeComponent } from './home/home.component';

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
        path: 'irpf',
        component: IrpfComponent
      },
      {
        path: 'ferias-coletivas',
        component: VacationComponent
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
