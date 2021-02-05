import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  dateMulti: string[];
  type: 'string';

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  }

  constructor() {}

  onChange($event){
    console.log($event);
  }

}
