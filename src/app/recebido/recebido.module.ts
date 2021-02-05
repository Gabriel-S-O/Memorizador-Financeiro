import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecebidoPageRoutingModule } from './recebido-routing.module';

import { RecebidoPage } from './recebido.page';
import {FormComponent} from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecebidoPageRoutingModule
  ],
  declarations: [RecebidoPage, FormComponent],
  entryComponents:[FormComponent]
})
export class RecebidoPageModule {}
