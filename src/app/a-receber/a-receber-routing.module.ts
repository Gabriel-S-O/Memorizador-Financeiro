import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AReceberPage } from './a-receber.page';

const routes: Routes = [
  {
    path: '',
    component: AReceberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AReceberPageRoutingModule {}
