import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  profileForm: FormGroup;
  enumRoles: Array<string>=[];
  usuario: Usuario =new Usuario;
  editForm: FormGroup;
  editedItem: Usuario;
  alert: boolean;
  messages: Array<String>=[];
  alertDanger: boolean = false;
  alertSucess: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,    
    private service: UsuarioService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();

    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getUsuario(+params.get("id")))
      ).subscribe(editora=>{
        this.usuario = editora;
        this.preenchaCampos(this.usuario);
        console.log(editora);
      });
  }

  onSubmit(){
    let id = this.usuario.id;
    this.usuario = new Usuario;
    this.usuario.id = id;
    this.usuario.nome = this.profileForm.value.nome;
    this.usuario.email = this.profileForm.value.email;
    this.usuario.dataNasc = this.profileForm.value.dataNasc;
    this.usuario.cpf = this.profileForm.value.cpf;
    this.usuario.cargo = this.profileForm.value.cargo;
    this.usuario.status = this.profileForm.value.status;
    this.usuario.matriculas = this.profileForm.value.matriculas;

    
    this.alert = null;
    window.location.reload();
    this.service.edit(this.usuario).subscribe(data=>{
     
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
  preenchaCampos(usuario: Usuario) {
    this.profileForm.controls.nome.setValue(usuario.nome);
    this.profileForm.controls.email.setValue(usuario.email);
    this.profileForm.controls.matriculas.setValue(usuario.matriculas);
    this.profileForm.controls.status.setValue(usuario.status);
    this.profileForm.controls.cargo.setValue(usuario.cargo);
    this.profileForm.controls.dataNasc.setValue(usuario.dataNasc);
    this.profileForm.controls.cpf.setValue(usuario.cpf);
  }
  criaFormulario() {
    this.profileForm = this.fb.group({
      nome:['', Validators.compose([])],
      cpf:['', Validators.compose([])],
      
    });
  }

  onUpdateDetails(){

    // Updating form value
    this.profileForm.patchValue({
        'nome': this.editedItem.nome,
        'cnpj': this.editedItem.cpf
    });
    this.editForm.updateValueAndValidity();
  }
}
