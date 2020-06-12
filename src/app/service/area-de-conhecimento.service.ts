import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AreaDeConhecimento } from '../model/Area-de-conhecimento';
import { Observable } from 'rxjs';
import { Response } from '../utils/response';
import { AreaDeConhecimentoDTO } from '../dto/AreaDeConhecimento.dto';

@Injectable({
  providedIn: 'root'
})
export class AreaDeConhecimentoService {
  edit(editora: AreaDeConhecimento) {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let areaDeConhecimentoDto = new AreaDeConhecimentoDTO(editora);
    console.log(JSON.stringify(areaDeConhecimentoDto));
    
    return this.http.put(this.url+"/"+editora.id,JSON.stringify(areaDeConhecimentoDto),{
      headers:httpHeaders,
      observe:'response',
    });
  }
  save(areaDeConhecimento: AreaDeConhecimento):Observable<HttpResponse<any>> {
   let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
   
   return this.http.post(this.url,JSON.stringify(areaDeConhecimento),{
     headers:httpHeaders,
     observe:'response'
   });
  
  }
  
  url:string = RESOURCE + "/areaDeConhecimento";
  linesPerPage:string = "10";
  orderBy:string = "nome";
  direction:string = "ASC";

  getAreaDeConhecimento(id:number):Observable<AreaDeConhecimento>{
    let valor = ''+id;
     return this.http.get<AreaDeConhecimento>(this.url+"/"+valor, {responseType:"json"});     
  } 
  getAreasDeConhecimento(page: number) {
    let p = ''+page;
    var getAreaDeConhecimentoURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
   return this.http.get(getAreaDeConhecimentoURL,
   {responseType:"json"});
  }
  getAllAreasDeConhecimento(){
    var getAreaDeConhecimentoURL= this.url + "/all";
    return this.http.get<Array<AreaDeConhecimento>>(getAreaDeConhecimentoURL,{responseType:"json"});
  }
  constructor(private http:HttpClient) { }
}
