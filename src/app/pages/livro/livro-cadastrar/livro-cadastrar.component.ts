import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { LivroService } from 'src/app/service/livro.service';
import { Router } from '@angular/router';
import { EditoraService } from 'src/app/service/editora.service';
import { Editora } from 'src/app/model/editora';
import { AreaDeConhecimentoService } from 'src/app/service/area-de-conhecimento.service';
import { AreaDeConhecimento } from 'src/app/model/Area-de-conhecimento';
import { LogoutComponent } from '../../logout/logout.component';
import { log } from 'util';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.css']
})


export class LivroCadastrarComponent implements OnInit {
  faCoffee = faCoffee;
  livro: Livro;
  profileForm: FormGroup;
  editoras: Array<Editora>=[];
  areasDeConhecimento: Array<AreaDeConhecimento>=[];
  autores: Array<string>=[];
  alert: boolean;
  messages: any;
  messageAddAutor: String;


  constructor(
    private fb: FormBuilder,
    private service: LivroService,
    private router: Router,
    private editoraService: EditoraService,
    private areaDeConhecimentoService: AreaDeConhecimentoService,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    this.editoraService.getAllEditoras().subscribe(data=>{
      this.editoras = data;
    });
    this.areaDeConhecimentoService.getAllAreasDeConhecimento().subscribe(data=>{
      this.areasDeConhecimento = data;
    })
  }
  
  onSubmit(){
    this.livro = new Livro;
    this.livro.editora = new Editora;
    this.livro.areaDeConhecimento = new AreaDeConhecimento;
    this.livro.nome = this.profileForm.value.nome;
    this.livro.edicao = this.profileForm.value.edicao;
    this.livro.ano = this.profileForm.value.ano;
    this.livro.isbn = this.profileForm.value.isbn;
    this.livro.areaDeConhecimento.id = this.profileForm.value.areaDeConhecimento;
    this.livro.editora.id = this.profileForm.value.editora;
    this.livro.autores = this.autores;
    this.livro.valor = this.profileForm.value.valor;
    
    console.log(this.profileForm.value.editora);
    this.service.save(this.livro).subscribe(data=>{
      console.log(data);
      
        window.location.reload();
      
    },
    error=>{
      this.handleError(error)
    });
    console.log(this.profileForm.value);
    
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
  criaFormulario(){
    this.profileForm = this.fb.group({
      nome:['',Validators.compose([Validators.required, Validators.minLength(2)])],
      edicao:['',Validators.compose([Validators.required, Validators.minLength(1)])],
      ano:['',Validators.compose([Validators.required, Validators.minLength(2)])],
      isbn:['',Validators.compose([Validators.required, Validators.minLength(2)])],
      autores:[this.autores,Validators.compose([Validators.required, Validators.minLength(2)])],
      areaDeConhecimento:['',Validators.compose([Validators.required])],
      editora:['',Validators.compose([Validators.required])],
      valor:['',Validators.compose([Validators.required, Validators.minLength(2)])],
      
    });
  }

  addAutor() {
    this.messageAddAutor="";
    if(this.profileForm.value.autores.length >2){
      this.autores.push(this.profileForm.value.autores);
      this.profileForm.value.autores="";
    }else{
      this.messageAddAutor = "O nome do Autor deve conter no mínimo 2 caracteres!"
    }   
  }

  removerAutor(index){
    this.autores.splice(index,1);
  }

}
