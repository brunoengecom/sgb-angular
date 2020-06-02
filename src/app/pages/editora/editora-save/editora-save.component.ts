import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Editora } from 'src/app/model/editora';
import { Router } from '@angular/router';
import { EditoraService } from 'src/app/service/editora.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-editora-save',
  templateUrl: './editora-save.component.html',
  styleUrls: ['./editora-save.component.css']
})
export class EditoraSaveComponent implements OnInit {
  
  profileForm: FormGroup;
  editora: Editora;
  editoras: Array<Editora> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  messages: Array<String>=[];
  alert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: EditoraService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    
    
    this.service.getEditoras(this.page).subscribe(
      data =>{
        this.editoras = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
    
  }
  criaFormulario(){
    this.profileForm = this.fb.group({
      nome:['',Validators.compose([Validators.required])],
      cnpj:['',Validators.compose([Validators.required])]
    });
  }
  onSubmit(){
    this.alert = false;
    this.messages =[];
    this.editora = new Editora;
    this.editora.nome = this.profileForm.value.nome;
    this.editora.cnpj = this.profileForm.value.cnpj;
    
    this.service.save(this.editora).subscribe(data=>{
      console.log(data);
      
        window.location.reload();
      
    },
    error=>{
      this.handleError(error)
    });
    
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
  

}
