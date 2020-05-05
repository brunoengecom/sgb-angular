import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Editora } from '../model/editora';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {
  save(editora: Editora) {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    
    return this.http.post(this.url,JSON.stringify(editora),{
      headers:httpHeaders,
      observe:'response'
    });
   
    
   }
  url:string = RESOURCE + "/editora";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";

  getEditoras(page: number) {
    let p = ''+page;
    var getEditoraURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
   return this.http.get(getEditoraURL,{responseType:"json"});
  }
  getAllEditoras(){
    var getEditoraURL= this.url + "/all";
    return this.http.get<Array<Editora>>(getEditoraURL,{responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
