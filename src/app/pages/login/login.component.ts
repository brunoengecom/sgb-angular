import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Login } from 'src/app/dto/login';
import { map, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login;
  alert:boolean=false;

  profileForm = this.fb.group({
    email:['brunoengecom@gmail.com'],
    senha:['972318']
  });

  constructor(
    private fb: FormBuilder,
    private service:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {    
  }

  onSubmit(){
    this.login = new Login;
    this.login.email = this.profileForm.value.email;
    this.login.senha = this.profileForm.value.senha;
    this.service.login(this.login).subscribe(
      data=>{
        localStorage.setItem("accessToken",data.headers.get("Authorization"));
        this.router.navigate(["/"]);
      }, 
      error=>{
        this.handleError(error)
      }
    )
  }
  handleError(handleError: HttpErrorResponse){
    this.alert=true;
    return throwError(handleError.error.message);
  }

}
