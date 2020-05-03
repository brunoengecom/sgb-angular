import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RESOURCE } from '../utils/API';
import { LivroDto } from '../dto/livro.dto';
@Injectable({
  providedIn: 'root'
})
export class LivroService {
  save(livro: Livro) {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let livroDto = new LivroDto;
    livroDto.nome = livro.nome;
    

    return this.http.post(this.url,JSON.stringify(livroDto),{
      headers:httpHeaders,
      observe:'response'
    });
  }
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
