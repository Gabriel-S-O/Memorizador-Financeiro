import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import { parse } from 'path';
import { LancamentosService } from '../services/lancamentos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  saldoMes = 0;
  valorRecebido = 0;
  valorReceber = 0;
  valorDespesa = 0;
  valorPagar = 0;

 

  constructor(public router:Router, public lancamentosService:LancamentosService) {}

  ngOnInit() {

    let lancamentos = this.lancamentosService.buscarTodos();
     lancamentos.snapshotChanges().subscribe(res =>{

      this.saldoMes = 0;
      this.valorRecebido = 0;
      this.valorReceber = 0;
      this.valorDespesa = 0;
      this.valorPagar = 0;

       res.forEach(item => {
        let a = item.payload.toJSON();
        if(a['tipo'] == 'recebido' && a['situacao'] == 1){
          this.valorRecebido += parseFloat(a['valor']);
        }else if(a['tipo'] == 'recebido' && a['situacao'] == 0){
          this.valorReceber += parseFloat(a['valor']);
        }

        if(a['tipo'] == 'despesa' && a['situacao'] == 1){
          this.valorDespesa += parseFloat(a['valor']);
        }else if(a['tipo'] == 'depesa' && a['situacao'] == 0){
          this.valorPagar += parseFloat(a['valor']);
        }
        
      })
    })
    this.saldoMes = (this.valorRecebido + this.valorReceber) - (this.valorDespesa + this.valorPagar);
  }

  chamarRecebido(){
    this.router.navigate(['recebido']);
  }

  chamarPago(){
    this.router.navigate(['pago']);
  }

  chamarReceber(){
    this.router.navigate(['a-receber']);
  }
 
  chamarPagar(){
    this.router.navigate(['a-pagar']);
  }
  
}
