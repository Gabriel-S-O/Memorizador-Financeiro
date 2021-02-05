import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APagarPageRoutingModule } from './a-pagar-routing.module';

import { APagarPage } from './a-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APagarPageRoutingModule
  ],
  declarations: [APagarPage]
})
export class APagarPageModule {}
