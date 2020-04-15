import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { HttpClient } from '@angular/common/http';
import { RESOURCE } from '../utils/API';
@Injectable({
  providedIn: 'root'
})
export class LivroService {
  url:string = RESOURCE + "/livro";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";

  getLivros(page: Number) {
    let p = ''+page;
    var getLivrosURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getLivrosURL);
   return this.http.get(getLivrosURL,
   {responseType:"json"});
  }

  getLivro(id:number):Observable<Livro>{
    let valor = ''+id;
     return this.http.get<Livro>(this.url+"/"+valor, {responseType:"json"});     
  }

  constructor(private http:HttpClient) { }
}
