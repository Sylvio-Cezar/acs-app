import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaborScopeComponent } from './labor-scope.component';

const routes: Routes = [
  {
    path: '',
    component: LaborScopeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaborScopeRoutingModule { }
