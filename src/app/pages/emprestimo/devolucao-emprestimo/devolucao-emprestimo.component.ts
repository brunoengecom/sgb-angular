import { Component, OnInit } from '@angular/core';
import { PatrimonioService } from 'src/app/service/patrimonio.service';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Emprestimo } from 'src/app/model/emprestimo';
import { Multa } from 'src/app/model/multa';

@Component({
  selector: 'app-devolucao-emprestimo',
  templateUrl: './devolucao-emprestimo.component.html',
  styleUrls: ['./devolucao-emprestimo.component.css']
})
export class DevolucaoEmprestimoComponent implements OnInit {
  alertPatrimonio: boolean;
  validaPatrimonio: boolean;
  profileFormEmprestimo: FormGroup;
  emprestimo: Emprestimo;
  multas: Array<Multa>=[];
  alertSuccess: Boolean;
  alertDanger: Boolean;
  patrimonio: any;
  usuario: any;

  constructor(
    private service: EmprestimoService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criaFormularioEmprestimo();
  }

  criaFormularioEmprestimo(){
    this.profileFormEmprestimo = this.fb.group({
      patrimonio:['',Validators.compose([Validators.required])]

    });
  }

  onSubmitPatrimonio(){
    this.alertSuccess=false;
    this.alertDanger = false;
    this.alertPatrimonio = false;    
    this.service.getEmprestimoAtivoByPatrimonio(this.profileFormEmprestimo.value.patrimonio).subscribe(data=>{
      this.emprestimo = data;
      console.log(data);
      
      
    },error=>{
      this.alertPatrimonio=true;
      console.log(error);
      
  })
}
onSubmitEmprestimo(){
  this.alertSuccess=false;
  this.alertDanger = false;
  this.service.devolucaoSave(this.patrimonio).subscribe(data=>{
    this.alertSuccess=true;
    console.log(data);
  },error=>{
    this.alertDanger=true;
    console.log(error);
    
  })
}
}
