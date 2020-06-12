import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LivroService } from 'src/app/service/livro.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Editora } from 'src/app/model/editora';
import { throwError } from 'rxjs';
import { EditoraService } from 'src/app/service/editora.service';
import { AreaDeConhecimentoService } from 'src/app/service/area-de-conhecimento.service';
import { AreaDeConhecimento } from 'src/app/model/Area-de-conhecimento';
import { log } from 'util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css']
})
export class LivroEditComponent implements OnInit {
  editForm: FormGroup;
  livro:Livro=new Livro;
  profileForm: FormGroup;
  alert: boolean;  
  id:number;
  edicao: number;
  ano: number;
  isbn: string;
  editora: Editora;
  areaDeConhecimento: AreaDeConhecimento;
  autores: Array<string>=[];
  nome: string;
  editoras: Array<Editora>=[];
  areasDeConhecimento: Array<AreaDeConhecimento>=[];
  editedItem: Livro;
  messageAddAutor: String;
  alertSuccess: Boolean;
  alertDanger: Boolean;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: LivroService,
    private fb: FormBuilder,    
    private editoraService: EditoraService,
    private areasDeConhecimentoService: AreaDeConhecimentoService
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    this.areasDeConhecimentoService.getAllAreasDeConhecimento().subscribe(data=>{
      this.areasDeConhecimento = data;
    })
    this.editoraService.getAllEditoras().subscribe(data=>{
      this.editoras=data;
      
    });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getLivro(+params.get("id")))
      ).subscribe(livro=>{
        this.livro = livro;
        this.preenchaCampos(this.livro);
        console.log(livro);
      });
  }
  onSubmit(){
    let id = this.livro.id;
    this.livro = new Livro;
    this.livro.id = id;
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
    
    this.alert = null;
    window.location.reload();
    this.service.edit(this.livro).subscribe(data=>{
     
        this.alert = true; 
        this.profileForm.controls.numero.setValue("");  
        window.location.reload();  
    },
    error=>{
      this.handleError(error)
 
    });

} 
  preenchaCampos(livro:Livro){
    this.profileForm.controls.nome.setValue(livro.nome);
    this.profileForm.controls.edicao.setValue(livro.edicao);
    this.profileForm.controls.ano.setValue(livro.ano);
    this.profileForm.controls.isbn.setValue(livro.isbn);
    this.profileForm.controls.areaDeConhecimento.setValue(livro.areaDeConhecimento.id);
    this.profileForm.controls.editora.setValue(livro.editora.id);
    this.autores = livro.autores;
    
  }

//handleError(error: any) {
  handleError(handleError: HttpErrorResponse){
    this.alert=true;
    return throwError(handleError.error.message);
  }
 // this.alert = false;
 // return throwError(this.handleError.error.message);
//}
criaFormulario(){
  this.profileForm = this.fb.group({
    nome:['', Validators.compose([])],
    edicao:['', Validators.compose([])],
    ano:['', Validators.compose([])],
    isbn:['', Validators.compose([])],
    areaDeConhecimento:['', Validators.compose([])],
    editora:['', Validators.compose([])],
    autores:['', Validators.compose([])]
  });
  }

  onUpdateDetails(){

    // Updating form value
    this.profileForm.patchValue({
        'nome': this.editedItem.nome,
        
        
    });
    this.editForm.updateValueAndValidity();
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

