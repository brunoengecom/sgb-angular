import { Injectable } from '@angular/core';
import { RESOURCE } from '../utils/API';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { UsuarioDto } from '../dto/usuario.dto';
import { Validators } from '@angular/forms';
import { FuncionarioDTO } from '../dto/funcionario.dto';
import { AlunoDTO } from '../dto/aluno.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string = RESOURCE + "/usuario";
  linesPerPage:string = "10";
  orderBy:string = "id";
  direction:string = "DESC";

  getUsuario(id: number): Observable<Usuario> {
    let valor = ''+id;
     return this.http.get<Usuario>(this.url+"/"+valor, {responseType:"json"});  
  }

  getUsuarioMulta(cpf:String){
    return this.http.get(this.url+"/buscaMulta?cpf="+cpf, {responseType:"json"});
  }
//observable: 
  getEnums():Observable<Array<string>>{
    return this.http.get<Array<string>>(this.url+"/listEnums", {responseType:"json"});
  }
  save(usuario: any) {
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let usuarioDto = new UsuarioDto;

    //UsuarioDto.usuario = usuario.nome;
    //UsuarioDto.usuario = usuario.email;

    return this.http.post(this.url,JSON.stringify(usuarioDto),{
      headers:httpHeaders,
      observe:'response'
    });
  }

  saveFuncionario(usuario:Usuario){
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let funcionarioDTO = new FuncionarioDTO(usuario);

    return this.http.post(this.url,JSON.stringify(usuario),{
      headers: httpHeaders,
      observe:'response'
    })
  }

  saveAluno(usuario:Usuario){
    let httpHeaders = new HttpHeaders({'Content-Type':'application/json','Cache-Control':'no-cache'});
    let alunoDTO = new AlunoDTO(usuario);

    return this.http.post(this.url,JSON.stringify(usuario),{
      headers: httpHeaders,
      observe:'response'
    })
  }
  
  getUsuarios(page: number) {
    let p = ''+page;
    var getURL= this.url + "?linesPerPage=" + this.linesPerPage + "&page=" + p + "&orderBy=" +this.orderBy + "&direction=" +this.direction;
    console.log(getURL);
   return this.http.get(getURL,
   {responseType:"json"});
  }


  constructor(private http:HttpClient) { }
}
