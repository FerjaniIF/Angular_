import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-cacher',
  templateUrl: './cacher.component.html',
  styleUrls: ['./cacher.component.css']
})
export class CacherComponent {
constructor(public _shared: SharedService){}
val : string ='Cacher';

cacher(){
  if(this._shared.show == true)
    this.val = 'Cacher';
  else{
    this.val = 'Afficher';
    for (let item = 0; item < this._shared.notes.length; item++) {  
      console.log(item);
    }
  }
  
}

test(){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Succèss !",
    showConfirmButton: false,
    timer: 1000
  });
}

}
