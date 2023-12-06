import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AbsenceModel } from '../AbsenceModel';
import { AbsService } from '../abs.service';

import jsPDF, { jsPDFAPI } from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-e',
  templateUrl: './liste-e.component.html',
  styleUrls: ['./liste-e.component.css']
})
export class ListeEComponent implements AfterViewInit {

  // --- calendrier ---
  @ViewChild('absdatetime') absdatetime !: ElementRef;

  ngAfterViewInit(): void {
    flatpickr(this.absdatetime.nativeElement, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }
  // fin 
  focus: boolean = false;
  public formValue !: FormGroup;
  absM : AbsenceModel = new AbsenceModel();
  absData !: any;

  showAdd !: boolean;
  showUpd !: boolean;

  constructor(private formbuilder: FormBuilder, private abs : AbsService, private router: Router){}

  ngOnInit() : void{
    this.formValue = this.formbuilder.group({
      ename: [''],
      eemail:[''],
      etudname:[''],
      etudclasse:[''],
      matiere: [''],
      absdatetime:[''],
      absences : 1
    })
    this.getAllEtudiant();
  }

  clickAddEtud(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpd = false;
  }

  postEtudDetails(){
    this.absM.ename = this.formValue.value.ename;
    this.absM.eemail = this.formValue.value.eemail;
    this.absM.etudname = this.formValue.value.etudname;
    this.absM.etudclasse = this.formValue.value.etudclasse;
    this.absM.matiere = this.formValue.value.matiere;
    this.absM.absdatetime = this.formValue.value.absdatetime;
    this.absM.absences = this.formValue.value.absences;

    this.abs.postEtudiant(this.absM)
    .subscribe(res =>{
      console.log(res);
      alert("Etudiant ajoute avec succes.")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEtudiant();
    },
    err =>{
      console.error(err);
      alert("Something went wrong")
    }
    )
  }

  getAllEtudiant(){
    this.abs.getEtudiant()
    .subscribe(res =>{
      this.absData = res;
    })
  }

  delEtudiant(row : any){
    this.abs.deleteEtudiant(row.id)
    .subscribe(res =>{
      alert("Etudiant supprime");
      this.getAllEtudiant();
    })
  }

  onEdit(row:any){
    this.absM.id = row.id;
    this.formValue.controls['ename'].setValue(row.ename);
    this.formValue.controls['eemail'].setValue(row.eemail);
    this.formValue.controls['etudname'].setValue(row.etudname);
    this.formValue.controls['etudclasse'].setValue(row.etudclasse);
    this.formValue.controls['matiere'].setValue(row.matiere);
    this.formValue.controls['absdatetime'].setValue(row.absdatetime);
    this.formValue.controls['absences'].setValue(row.absences);

    this.showAdd = false;
    this.showUpd = true;
  }

  updateEtudiant(){
    this.absM.ename = this.formValue.value.ename;
    this.absM.eemail = this.formValue.value.eemail;
    this.absM.etudname = this.formValue.value.etudname;
    this.absM.etudclasse = this.formValue.value.etudclasse;
    this.absM.matiere = this.formValue.value.matiere;
    this.absM.absdatetime = this.formValue.value.absdatetime;
    this.absM.absences = this.formValue.value.absences;

    this.abs.updateEtudiant(this.absM, this.absM.id)
    .subscribe(res =>{
      alert("Mis a jour Avec Succes");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEtudiant();
    })
  }

  public convertToPDF(){
    html2canvas(document.getElementById("listeEtud")!).then(canvas =>{
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width /canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0,0, width, height)
      pdf.save('ListeDesAbsences.pdf');;
    });
  }
}
