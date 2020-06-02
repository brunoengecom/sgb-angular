import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Emprestimo } from 'src/app/model/emprestimo';
import { Usuario } from 'src/app/model/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Multa } from 'src/app/model/multa';
import { Patrimonio } from 'src/app/model/patrimonio';
import { PatrimonioService } from 'src/app/service/patrimonio.service';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emprestimo-save',
  templateUrl: './emprestimo-save.component.html',
  styleUrls: ['./emprestimo-save.component.css']
})
export class EmprestimoSaveComponent implements OnInit {
  emprestimo: Emprestimo;
  multas: Array<Multa>=[];
  cpf:String;
  emprestimosAtivos: number;
  usuario: Usuario;
  patrimonio: Patrimonio;
  profileFormUsuario: FormGroup;
  profileFormEmprestimo: FormGroup; 
  alertUsuario: Boolean;
  alertPatrimonio: Boolean;
  alertSuccess: Boolean;
  alertDanger: Boolean;
  
  constructor(
    private service: EmprestimoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private patrimonioService:  PatrimonioService
  ) { }

  
  ngOnInit(): void {
    
    this.criaFormularioUsuario();
    this.criaFormularioEmprestimo();
    
  }

//usuario e emprestimo
  criaFormularioUsuario(){
    this.profileFormUsuario = this.fb.group({
      cpf:['',Validators.compose([Validators.required])]
    });
  }

  criaFormularioEmprestimo(){
    this.profileFormEmprestimo = this.fb.group({
      patrimonio:['',Validators.compose([Validators.required])]
    });
  }
  onSubmitPatrimonio(){
    this.alertPatrimonio = false;
    this.patrimonioService.getPatrimonioByNumero(this.profileFormEmprestimo.value.patrimonio).subscribe(data=>{
      this.patrimonio=data;
      
    },error=>{
      this.alertPatrimonio=true;
  })
}

  onSubmitCPF(){
    this.usuario = null;
    this.emprestimosAtivos = null;
    this.multas = null;
    this.alertUsuario = false;
    this.usuarioService.getUsuarioMulta(this.profileFormUsuario.value.cpf).subscribe(data=>{
      this.usuario = data["usuario"];
      this.multas = data["multas"];
      this.emprestimosAtivos = data["emprestimosAtivos"];
      
    },error=>{
      this.alertUsuario=true;
      
    })

  }

  onSubmitEmprestimo(){
    this.alertSuccess=false;
    this.service.emprestimoSave(this.patrimonio.numero, this.usuario.id).subscribe(data=>{
      this.alertSuccess=true;
      console.log(data);
    },error=>{
      this.alertDanger=true;
    })
  }


}
