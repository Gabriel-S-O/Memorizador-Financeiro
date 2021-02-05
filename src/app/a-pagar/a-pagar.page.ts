import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';   
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-a-pagar',
  templateUrl: './a-pagar.page.html',
  styleUrls: ['./a-pagar.page.scss'],
})
export class APagarPage implements OnInit {

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
