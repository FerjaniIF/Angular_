import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-supp-tout',
  templateUrl: './supp-tout.component.html',
  styleUrls: ['./supp-tout.component.css']
})
export class SuppToutComponent {

constructor(public _shared: SharedService){}

suppTout(){
  setTimeout(() => {
  this._shared.notes = [];
}, 300);
}

test(){
  Swal.fire({
    title: "Tout est supprimé",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
}

}
