import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.css']
})
export class UsuarioSaveComponent implements OnInit {
  profileForm: FormGroup;
  usuario: Usuario

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
  }
  criaFormulario() {
    throw new Error("Method not implemented.");
  }
  onSubmit(){
    this.usuario = new Usuario;
    this.usuario.nome = this.profileForm.value.nome;
    this.usuario.email = this.profileForm.value.email;

    this.service.save(this.usuario).subscribe(data=>{
      console.log(data);
      
        window.location.reload();
      
    },
    error=>{
      this.handleError(error)
    });
}handleError(error: any) {
  throw new Error("Method not implemented.");
}
}
