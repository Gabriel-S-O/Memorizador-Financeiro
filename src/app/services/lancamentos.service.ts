import { Injectable } from '@angular/core';
import { Lancamentos } from '../model/lancamentos';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {
  listaLancamentos() {
    throw new Error('Method not implemented.');
  }

  lancamentoLista:AngularFireList<any>;
  lancamentoObject:AngularFireObject<any>;

  constructor(private db:AngularFireDatabase) {
    this.buscarTodos();

   }

   criarLancamento(lan:Lancamentos){
     return this.lancamentoLista.push(lan);
   }

   buscarPorId(id:string){
     this.lancamentoObject = this.db.object('/lancamentos/'+id);
     return this.lancamentoObject;
   }

   atualizarLancamento(id: string, lan:Lancamentos){
    this.buscarPorId(id);
    return this.lancamentoObject.update(lan);
  }

  removerLancamento(id:string){
    this.buscarPorId(id);
    this.lancamentoObject.remove();
  }

  buscarTodos(){
    this.lancamentoLista = this.db.list('/lancamentos');
    return this.lancamentoLista;
  }
}
