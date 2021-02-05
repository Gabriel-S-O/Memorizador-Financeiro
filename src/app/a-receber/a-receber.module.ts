import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AReceberPageRoutingModule } from './a-receber-routing.module';

import { AReceberPage } from './a-receber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AReceberPageRoutingModule
  ],
  declarations: [AReceberPage]
})
export class AReceberPageModule {}
