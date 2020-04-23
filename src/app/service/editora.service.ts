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
    var getEditoraURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getEditoraURL);
   return this.http.get(getEditoraURL,
   {responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
