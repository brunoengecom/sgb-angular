import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RESOURCE } from '../utils/API';
import { Patrimonio } from '../model/patrimonio';
import { Observable } from 'rxjs';
import { PatrimonioDto } from '../dto/patrimonio.dto';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {
  getPatrimonio(id: number): Observable<Patrimonio> {
    let valor = ''+id;
     return this.http.get<Patrimonio>(this.url+"/"+valor, {responseType:"json"});
  }
  save(patrimonio: Patrimonio) {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let patrimonioDto = new PatrimonioDto;
    patrimonioDto.numero = patrimonio.numero;
    patrimonioDto.livro = patrimonio.livro.id;

    return this.http.post(this.url,JSON.stringify(patrimonioDto),{
      headers:httpHeaders,
      observe:'response'
    });
  }
  url:string = RESOURCE + "/patrimonio";
  linesPerPage:number = 10;
  orderBy:string = "id";
  direction:string = "DESC";
  
  getPatrimonios(page: number) {
    let p = ''+page;
    var getPatrimoniosURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
   return this.http.get(getPatrimoniosURL,
   {responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
