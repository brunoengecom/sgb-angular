import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Editora } from 'src/app/model/editora';
import { Router } from '@angular/router';
import { EditoraService } from 'src/app/service/editora.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editora-save',
  templateUrl: './editora-save.component.html',
  styleUrls: ['./editora-save.component.css']
})
export class EditoraSaveComponent implements OnInit {
  
  profileForm: FormGroup;
  editora: Editora

  constructor(
    private fb: FormBuilder,
    private service: EditoraService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
  }
  onSubmit(){
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
  handleError(error: HttpErrorResponse) {
    throw new Error("Method not implemented.");
  }
  criaFormulario(){
    this.profileForm = this.fb.group({
      nome:['',Validators.compose([Validators.required, Validators.minLength(2)])],
      cnpj:['',Validators.compose([Validators.required, Validators.minLength(14),Validators.maxLength(14)])]
    });
  }

}
