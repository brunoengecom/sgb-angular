import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  
  url:string = RESOURCE + "/emprestimo";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";
  
  getEmprestimos(page: number) {
    let p = ''+page;
    var getURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getURL);
   return this.http.get(getURL,
   {responseType:"json"});
  }


  constructor(private http:HttpClient) { }
}
