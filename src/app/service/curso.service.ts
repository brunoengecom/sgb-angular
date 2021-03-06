import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  getCurso(id: number):Observable<Curso> {
    return this.http.get<Curso>(this.url+"/"+id,
      {responseType:"json",observe:"body"});
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
