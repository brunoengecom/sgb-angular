import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatrimonioService } from 'src/app/service/patrimonio.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LivroService } from 'src/app/service/livro.service';
import { switchMap } from 'rxjs/operators';
import { Livro } from 'src/app/model/livro';
import { Patrimonio } from 'src/app/model/patrimonio';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-patrimonio-save',
  templateUrl: './patrimonio-save.component.html',
  styleUrls: ['./patrimonio-save.component.css']
})
export class PatrimonioSaveComponent implements OnInit {
  profileForm: FormGroup;
  livro: Livro;
  patrimonio: Patrimonio;
  alert: boolean;

  constructor(
    private service: PatrimonioService,
    private fb: FormBuilder,    
    private router: Router,
    private livroService: LivroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
  
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.livroService.getLivro(+params.get("id")))
      ).subscribe(livro=>{
        this.livro = livro;
      });
    }
  onSubmit(){
    this.patrimonio = new Patrimonio;
    this.patrimonio.numero = this.profileForm.value.numero;
    this.patrimonio.livro = this.livro;
    this.alert = null;

    this.service.save(this.patrimonio).subscribe(data=>{
      console.log(data);
        this.alert = true; 
        this.profileForm.controls.numero.setValue("");    
    },
    error=>{
      this.handleError(error)
 
    });
    
  }
  handleError(handleError: HttpErrorResponse) {
    this.alert = false;
    return throwError(handleError.error.message);
  }
  criaFormulario(){
    this.profileForm = this.fb.group({
      numero:['', Validators.compose([Validators.required])]
    });

}

}
