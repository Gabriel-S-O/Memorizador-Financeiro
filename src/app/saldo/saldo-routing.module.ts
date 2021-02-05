import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaldoPage } from './saldo.page';

const routes: Routes = [
  {
    path: '',
    component: SaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaldoPageRoutingModule {}
