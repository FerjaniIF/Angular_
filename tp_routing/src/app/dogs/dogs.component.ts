import { Component } from '@angular/core';

import { DOGS } from '../mock-dogs';
import { Dog } from '../dog';

import * as _ from 'lodash';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  dogs = DOGS;
  showDetails : boolean = false;
  selectedDog: Dog = {} as Dog;

  getDogById(id:number){
    let index = _.findIndex(this.dogs, (d:Dog) => {
      return d.id === id;
    });

    this.selectedDog = this.dogs[index];
    console.log(this.selectedDog);
  }
}
