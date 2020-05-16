import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Turma } from '../model/turma';
import { TurmaDto } from '../dto/turma.dto';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  url:string = RESOURCE + "/turma";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";
  
  getPeriodos() {
    var getURL= this.url+"/periodo";
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    return this.http.get<Array<String>>(getURL,{
      headers:httpHeaders,
      observe:'body'
    });
  }
  save(turma: Turma) {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    
    var turmaDto = new TurmaDto(turma);
    console.log(JSON.stringify(turmaDto));
    
    return this.http.post(this.url,JSON.stringify(turmaDto),{
      headers:httpHeaders,
      observe:'response'
    });
    
   }
  
  

  getTurmas(page: number) {
    let p = ''+page;
    var getURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getURL);
   return this.http.get(getURL,
   {responseType:"json"});
  }

  constructor(private http:HttpClient) { }
}
