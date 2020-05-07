import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.css']
})
export class UsuarioSaveComponent implements OnInit {
  profileForm: FormGroup;
  //enumRoles: Observable<Array<string>>;
  enumRoles: Array<string>=[];


  constructor(
    private fb: FormBuilder,
    private service: UsuarioService
  ) { }

  onSubmit(){
    
  }

  ngOnInit(): void {
    //inicia o componente ele chama o metodo
    this.criaFormulario();
    //this.enumRoles = this.service.getEnums();
    //subscribe e quando quer pegar a resposta de um metodo assincrono
    this.service.getEnums().subscribe(data=>{
      this.enumRoles = data;     
    });
  }
  criaFormulario(){
    this.profileForm = this.fb.group({
      nome:['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.required])],
      dataNasc:['', Validators.compose([Validators.required])],
      cpf:['', Validators.compose([Validators.required])],
      tipoCadastro:['',Validators.compose([Validators.required])],
      turma:[''],
      matricula:[''],
      senha:[''],
      cargo:['']

    })
  }
}   