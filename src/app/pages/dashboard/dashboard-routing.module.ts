import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'irpf',
        loadChildren: () => import('./irpf/irpf.module').then(m => m.IrpfModule),
      },
      {
        path: 'ferias-coletivas',
        loadChildren: () => import('./vacation/vacation.module').then(m => m.VacationModule),
      },
      {
        path: 'aliquotas-beneficios',
        loadChildren: () => import('./tax-rates/tax-rates.module').then(m => m.TaxRatesModule),
      },
      {
        path: 'ambito-trabalhista',
        loadChildren: () => import('./labor-scope/labor-scope.module').then(m => m.LaborScopeModule),
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
