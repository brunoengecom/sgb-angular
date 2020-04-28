import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private service:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.logout();
    this.router.navigate(["/login"]);
  }

}
