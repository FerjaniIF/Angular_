import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginForm! : FormGroup
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router : Router ){}

  ngOnInit(): void{
    this.loginForm = this.formbuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/comments")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username == this.loginForm.value.username && a.password == this.loginForm.value.password
      });
      if (user){
        this.loginForm.reset();
        this.router.navigate(['liste'])
      }
      else{
        alert(" user not found");
      }
    },err =>{
      alert("Something went wrong")
    }
    )
  }
}
