import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {
  url:string = RESOURCE + "/editora";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";

  getEditoras(page: number) {
    let p = ''+page;
    var getLivrosURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getLivrosURL);
   return this.http.get(getLivrosURL,
   {responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
