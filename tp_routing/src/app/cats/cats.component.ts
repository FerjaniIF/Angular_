import { Component } from '@angular/core';
import { CATS } from '../mock-cats';
import { Cat } from '../cat';
import * as _ from 'lodash';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  
  cats = CATS;

  // selectedCat : Cat = {} as Cat;

  // showD: boolean = false;

  // getCatById(id: number): void {
  //   const index = this.cats.findIndex(cat => cat.id === id);
  //   this.selectedCat = index !== -1 ? this.cats[index] : {} as Cat;
  // }
}
