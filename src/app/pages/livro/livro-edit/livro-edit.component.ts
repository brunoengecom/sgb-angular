import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LivroService } from 'src/app/service/livro.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Editora } from 'src/app/model/editora';
import { throwError } from 'rxjs';

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
  editora: Editora
  autores: string[];
  nome: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LivroService,
    private fb: FormBuilder,    
    private livroService: LivroService
  
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getLivro(+params.get("id")))
      ).subscribe(livro=>{
        this.livro = livro;
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

    this.service.save(this.livro).subscribe(data=>{
      console.log(data);
        this.alert = true; 
        this.profileForm.controls.numero.setValue("");    
    },
    error=>{
      this.handleError(error)
 
    });

}  //handleError(error: any) {
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }
 // this.alert = false;
 // return throwError(this.handleError.error.message);
//}
criaFormulario(){
  this.profileForm = this.fb.group({
    numero:['', Validators.compose([Validators.required])]
  });
  }

}