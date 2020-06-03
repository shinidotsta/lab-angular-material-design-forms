import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../Models/login.model';
import {FormGroup,FormBuilder,Validators  } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user :LoginModel=new LoginModel();
  LoginForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm=this.formbuilder.group({
      'name':[this.user.username,[Validators.required]],
      'password':[this.user.password,[Validators.required,Validators.minLength(5)]]
    })
  }
  onLoginSubmit()
  {
   alert(this.user.username+''+this.user.password);
  }

}
