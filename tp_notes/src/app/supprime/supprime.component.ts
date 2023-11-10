import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-supprime',
  templateUrl: './supprime.component.html',
  styleUrls: ['./supprime.component.css']
})
export class SupprimeComponent {

  constructor(public _shared: SharedService){}
  supprimer(){
    setTimeout(() => {
      this._shared.notes.pop();
    }, 2300);
  }

  test(){
    Swal.fire({
      title: "Es-tu sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprime-le!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Supprimé!",
          text: "Votre note a été supprimée.",
          icon: "success"
        });
      }
    });
  }

}
