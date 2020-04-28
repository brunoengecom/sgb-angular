import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  getCurso(arg0: number): any {
    throw new Error("Method not implemented.");
  }
  url:string = RESOURCE + "/curso";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";

  getCursos(page: number) {
    let p = ''+page;
    var getURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getURL);
   return this.http.get(getURL,
   {responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
