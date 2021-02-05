import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecebidoPage } from './recebido.page';

const routes: Routes = [
  {
    path: '',
    component: RecebidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecebidoPageRoutingModule {}
