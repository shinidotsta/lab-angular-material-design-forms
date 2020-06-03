import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../Models/register.model';
import {FormGroup,FormBuilder,Validators  } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user :RegisterModel=new RegisterModel();
  RegisterForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.RegisterForm=this.formbuilder.group({
      'name':[this.user.username,[Validators.required]],
      'email':[this.user.email,[Validators.required,Validators.email]],
      'password':[this.user.password,[Validators.required,Validators.minLength(5)]],
      'role':[this.user.role,[Validators.required]]
    })
  }
  onRegisterSubmit()
  {
    alert(this.user.username+' '+this.user.email+' '+this.user.password+' '+this.user.role);
  }

}
