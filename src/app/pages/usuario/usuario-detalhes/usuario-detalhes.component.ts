import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { switchMap } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FormGroup } from '@angular/forms';
import { Turma } from 'src/app/model/turma';
import { Matricula } from 'src/app/model/Matricula';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {
  usuario:Usuario=new Usuario;
  turma:Turma=new Turma;
  matriculas : Array<Matricula>=[];
  usuarios: Array<Usuario> = [];
  id:number;
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  linesPerPage: number = 0;
  enumRoles: Array<string>=[];
  profileForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getUsuario(+params.get("id")))
      ).subscribe(usuario=>{
        console.log(usuario);
        this.usuario = usuario;
      });
      this.service.getEnums().subscribe(data=>{
        this.enumRoles = data;     
      });
  }

}
