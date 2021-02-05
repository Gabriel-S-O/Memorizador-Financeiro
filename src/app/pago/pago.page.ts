import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';   
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

async chamarFormulario(){
  const modal = await this.modalController.create({
    component: FormComponent
  });
  return await modal.present();
}

}
