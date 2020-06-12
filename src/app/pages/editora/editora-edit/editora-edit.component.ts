import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EditoraService } from 'src/app/service/editora.service';
import { switchMap } from 'rxjs/operators';
import { Editora } from 'src/app/model/editora';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-editora-edit',
  templateUrl: './editora-edit.component.html',
  styleUrls: ['./editora-edit.component.css']
})
export class EditoraEditComponent implements OnInit {
  profileForm: FormGroup;
  editora: Editora =new Editora;
  editForm: FormGroup;
  editedItem: Editora;
  alert: boolean;
  alertSuccess: Boolean;
  alertDanger: Boolean;
  

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,    
    private service: EditoraService,
    private editoraService: EditoraService,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();

    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getEditora(+params.get("id")))
      ).subscribe(editora=>{
        this.editora = editora;
        this.preenchaCampos(this.editora);
        console.log(editora);
      });
  }

  
  onSubmit(){
    let id = this.editora.id;
    this.editora = new Editora;
    this.editora.id = id;
    this.editora.nome = this.profileForm.value.nome;
    this.editora.cnpj = this.profileForm.value.cnpj;
    
    this.alert = null;
    window.location.reload();
    this.service.edit(this.editora).subscribe(data=>{
     
        this.alert = true; 
        this.profileForm.controls.numero.setValue("");  
        window.location.reload();  
    },
    error=>{
      this.handleError(error)
 
    });

} 
handleError(handleError: HttpErrorResponse){
  this.alert=true;
  return throwError(handleError.error.message);
}

  preenchaCampos(editora: Editora) {
    this.profileForm.controls.nome.setValue(editora.nome);
    this.profileForm.controls.cnpj.setValue(editora.cnpj);
  }

  criaFormulario(){
    this.profileForm = this.fb.group({
      nome:['', Validators.compose([])],
      cnpj:['', Validators.compose([])],
      
    });
    }

    onUpdateDetails(){

      // Updating form value
      this.profileForm.patchValue({
          'nome': this.editedItem.nome,
          'cnpj': this.editedItem.cnpj
      });
      this.editForm.updateValueAndValidity();
    }

}
