import { Component, OnInit, Input } from '@angular/core';
import {Lancamentos} from '../../model/lancamentos';
import {LancamentosService} from '../../services/lancamentos.service';
import {ModalController, AlertController} from '@ionic/angular';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  lancamento:Lancamentos;
  
  @Input() key:string;
  
  constructor(public modalCtrl:ModalController, public lancamentosService:LancamentosService, public alertController: AlertController) { }

  ngOnInit() {
    if(this.key != undefined){
      this.lancamentosService.buscarPorId(this.key).valueChanges().subscribe(res=>{
        this.lancamento = res;
      })

    }else{
     this.lancamento = {
      key:'',
      valor:0,
      descricao:'',
      tipo:'recebido',
      categoria:'salário',
      dataLancamento:new Date(),
      situacao:false
     };
      
    }
       
      

}

excluirLancamento(){
  if(this.key!=undefined){
    this.lancamentosService.removerLancamento(this.key);
    this.dismiss();
  }else{
    this.dismiss();
  }
}

salvarLancamento(){
  if(this.key==undefined){
    this.lancamentosService.criarLancamento(this.lancamento).then(res => {
      console.log("testando: " + this.lancamento.descricao);
      this.dismiss();
  }).catch(error => console.log(error));

}else{
    this.lancamentosService.atualizarLancamento(this.key, this.lancamento).then(res => {
      console.log(res);
      this.dismiss();
    }).catch(error => console.log(error));
}
    }

    dismiss() {
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }

    async alertaExcluir() {
      const alert = await this.alertController.create({
        header: 'Excluir',
        message: 'Você deseja excluir o item ?',
        buttons: [
          {
            text: 'Excluir'

        },
        'Cancelar']
      });
  
      await alert.present();
    }
  
    
}


