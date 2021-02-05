import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';   
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-a-receber',
  templateUrl: './a-receber.page.html',
  styleUrls: ['./a-receber.page.scss'],
})
export class AReceberPage implements OnInit {

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
