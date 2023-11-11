import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent {

  dogs = DOGS;

  @Input() dog: Dog = {} as Dog;

}
