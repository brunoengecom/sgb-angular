import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginInteceptor implements HttpInterceptor{

    constructor(
        private router:Router
    ){
        
    }

    intercept(req:HttpRequest<any>, next: HttpHandler){
        console.log(req.url);
       if(req.url.substring(req.url.length -6)!= "/login"){
        if(localStorage.getItem("accessToken")==null){
            this.router.navigate(["/login"]);
        }
        req = req.clone({
            setHeaders:{
                "Authorization":localStorage.getItem("accessToken")
            }
        });
       }
        
        
        return next.handle(req);
    }


}