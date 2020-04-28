import { Injectable } from '@angular/core';
import { Login } from '../dto/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RESOURCE } from '../utils/API';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  url:string = RESOURCE + "/login";
  login(login: Login):Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
   
    return this.http.post(this.url,JSON.stringify(login),{
      headers:httpHeaders,
      observe:'response'
      
    });
  }

  logout() {
    localStorage.clear();
  }
  constructor(private http:HttpClient  ) { }

}
