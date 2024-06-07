import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrpfComponent } from './irpf.component';

const routes: Routes = [
  {
    path: '',
    component: IrpfComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrpfRoutingModule { }
