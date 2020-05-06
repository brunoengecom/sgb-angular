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

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css']
})
export class LivroEditComponent implements OnInit {

  livro:Livro=new Livro;
  profileForm: FormGroup;
  alert: boolean;  
  id:number;
  edicao: number;
  ano: number;
  isbn: string;
  editora: Editora;
  areaDeConhecimento: AreaDeConhecimento;
  autores: string[];
  nome: string;
  editoras: Array<Editora>=[];
  areasDeConhecimento: Array<AreaDeConhecimento>=[];

  constructor(
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
    this.livro = new Livro;
    this.livro.nome = this.nome;
    this.livro.edicao = this.edicao;
    this.livro.ano = this.ano;
    this.livro.isbn = this.isbn;
    this.livro.editora.nome = this.editora.nome;
    this.livro.autores = this.autores;
    this.alert = null;

    this.service.edit(this.livro).subscribe(data=>{
      console.log(data);
        this.alert = true; 
        this.profileForm.controls.numero.setValue("");    
    },
    error=>{
      this.handleError(error)
 
    });

} 
  preenchaCampos(livro:Livro){
    this.profileForm.controls.edicao.setValue(this.livro.edicao);
    this.profileForm.controls.ano.setValue(this.livro.ano);
    this.profileForm.controls.isbn.setValue(this.livro.isbn);
    this.profileForm.controls.areaDeConhecimento.setValue(this.livro.areaDeConhecimento.id);
    this.profileForm.controls.editora.setValue(this.livro.editora.id);
    this.profileForm.controls.autores.setValue(this.livro.autores);
    
  }

//handleError(error: any) {
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }
 // this.alert = false;
 // return throwError(this.handleError.error.message);
//}
criaFormulario(){
  this.profileForm = this.fb.group({
    edicao:['', Validators.compose([Validators.required])],
    ano:['', Validators.compose([Validators.required])],
    isbn:['', Validators.compose([Validators.required])],
    areaDeConhecimento:['', Validators.compose([Validators.required])],
    editora:['', Validators.compose([Validators.required])],
    autores:['', Validators.compose([Validators.required])]
  });
  }

}