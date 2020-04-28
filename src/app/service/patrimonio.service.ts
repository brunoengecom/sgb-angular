import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESOURCE } from '../utils/API';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {
  url:string = RESOURCE + "/patrimonio";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";
  
  getPatrimonios(page: number) {
    let p = ''+page;
    var getPatrimoniosURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getPatrimoniosURL);
   return this.http.get(getPatrimoniosURL,
   {responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
