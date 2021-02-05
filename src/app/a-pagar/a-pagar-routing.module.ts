import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APagarPage } from './a-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: APagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APagarPageRoutingModule {}
