import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AreaDeConhecimentoService } from 'src/app/service/area-de-conhecimento.service';
import { AreaDeConhecimento } from 'src/app/model/Area-de-conhecimento';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-area-de-conhecimento',
  templateUrl: './area-de-conhecimento.component.html',
  styleUrls: ['./area-de-conhecimento.component.css']
})
export class AreaDeConhecimentoComponent implements OnInit {
 
  areaConhecimento: AreaDeConhecimento;
  areasDeConhecimento: Array<AreaDeConhecimento> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  alert: boolean = false;
  profileForm: FormGroup;

  constructor(
    private service: AreaDeConhecimentoService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    this.service.getAreasDeConhecimento(this.page).subscribe(
      data =>{
        this.areasDeConhecimento = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        
      }
    );
  }
  onSubmit(){
    this.areaConhecimento = new AreaDeConhecimento;
    this.areaConhecimento.nome = this.profileForm.value.nome;
    this.areasDeConhecimento.push(this.areaConhecimento);
    this.service.save(this.areaConhecimento).subscribe(data=>{
      console.log(data);
      
        window.location.reload();
      
    },
    error=>{
      this.handleError(error)
    });
    
  }
      criaFormulario(){
        
        this.profileForm = this.fb.group({
          nome:['',Validators.compose([Validators.required, Validators.minLength(2)])]
        });
      }
  
  handleError(handleError: HttpErrorResponse){
    this.alert=true;
    return throwError(handleError.error.message);
  }

}
