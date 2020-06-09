import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { Emprestimo } from '../model/emprestimo';
import { EmprestimoDTO } from '../dto/emprestimo.dto';
import { stringify } from 'querystring';
import { DevolucaoDTO } from '../dto/devolucao.dto';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
   
  url:string = RESOURCE + "/emprestimo";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";

  getCPF(cpf: number):Observable<Usuario> {
    let valor = ''+cpf;
    return this.http.get<Usuario>(this.url+"/"+valor, {responseType:"json"});
  }
  
  getEmprestimos(page: number) {
    let p = ''+page;
    var getURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p 
    + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getURL);
   return this.http.get(getURL,
   {responseType:"json"});
  }

  getEmprestimoAtivoByPatrimonio(patrimonio:String):Observable<Emprestimo>{
   return this.http.get<Emprestimo>(this.url+"/ativo/"+patrimonio);
  }

  emprestimoSave(patrimonio , usuario){
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let emprestimoDTO = new EmprestimoDTO(usuario,patrimonio);
    console.log(JSON.stringify(emprestimoDTO));
    return this.http.post(this.url,JSON.stringify(emprestimoDTO),{
    headers:httpHeaders,
      observe:'response'
    });
    
  }

  devolucaoSave(patrimonio){
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let devolucaoDTO = new DevolucaoDTO(patrimonio);
    
    return this.http.post(this.url,JSON.stringify(devolucaoDTO),{
    headers:httpHeaders,
      observe:'response'
    });
    
  }

  validarPatrimonio(patrimonio: string) {
    return this.http.get(this.url+"/validaLivro/"+patrimonio);
  }

  


  constructor(private http:HttpClient) { }
}
