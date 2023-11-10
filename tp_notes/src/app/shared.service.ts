import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  notes: any[] = [];

  show : boolean = true;
  
  
}
