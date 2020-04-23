import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Login } from 'src/app/dto/login';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login;

  profileForm = this.fb.group({
    email:['brunoengecom@gmail.com'],
    senha:['972318']
  });

  constructor(
    private fb: FormBuilder,
    private service:LoginService
  ) { }

  ngOnInit(): void {    
  }

  onSubmit(){
    this.login = new Login;
    this.login.email = this.profileForm.value.email;
    this.login.senha = this.profileForm.value.senha;
    this.service.login(this.login).pipe(map(data=>{
      console.log(data);
    }))
  }

}
