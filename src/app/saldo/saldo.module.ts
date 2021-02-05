import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaldoPageRoutingModule } from './saldo-routing.module';

import { SaldoPage } from './saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaldoPageRoutingModule
  ],
  declarations: [SaldoPage]
})
export class SaldoPageModule {}
