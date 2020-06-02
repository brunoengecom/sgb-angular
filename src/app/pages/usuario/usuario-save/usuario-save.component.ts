import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { min } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Matricula } from 'src/app/model/Matricula';
import { Turma } from 'src/app/model/turma';

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.css']
})
export class UsuarioSaveComponent implements OnInit {
  profileForm: FormGroup;
  //enumRoles: Observable<Array<string>>;
  enumRoles: Array<string>=[];
  usuario: Usuario;
  messages: Array<String>=[];
  alert: boolean = false;


  constructor(
    private fb: FormBuilder,
    private service: UsuarioService
  ) { }

  onSubmit(){
    this.alert = false;
    this.messages =[];
    this.usuario = new Usuario;

    this.usuario.nome = this.profileForm.value.nome;
    this.usuario.email = this.profileForm.value.email;
    this.usuario.dataNasc = this.profileForm.value.dataNasc;
    this.usuario.cpf = this.profileForm.value.cpf;
    
    if(this.profileForm.value.tipoCadastro==="FUNCIONARIO"){
      this.usuario.cargo = this.profileForm.value.cargo;

      this.service.saveFuncionario(this.usuario).subscribe(data=>{
        console.log("Salvou");
       //this.alert("");
        
      },error=>{
        this.handleError(error);
      })


    }else if(this.profileForm.value.tipoCadastro==="ALUNO"){
      let matricula = new Matricula;
      let turma = new Turma;

      matricula.numero = this.profileForm.value.matricula;
      turma.id = this.profileForm.value.turma;
      
      matricula.turma = turma;
      this.usuario.matriculas.push(matricula);
      this.service.saveAluno(this.usuario).subscribe(data=>{
        console.log("Salvou");
        
        //this.alert("");
      },error=>{

        this.handleError(error);
        
      })
    }
    
  }
  handleError(handleError: HttpErrorResponse) {
    this.alert=true;
    //this.message = handleError.error.errors;
    console.log(handleError);
    
    handleError.error.errors.forEach(e => {
      this.messages.push("* "+e.field+": "+e.defaultMessage+"");
    });
    return throwError(handleError.error.message);
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
      nome:['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
      email:['', Validators.compose([Validators.required])],
      dataNasc:['', Validators.compose([Validators.required])],
      cpf:['', Validators.compose([Validators.required])],
      tipoCadastro:['',Validators.compose([Validators.required])],
      turma:[''],
      matricula:[''],
      cargo:['']

    })
  }
}   