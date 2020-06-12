import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AreaDeConhecimentoService } from 'src/app/service/area-de-conhecimento.service';
import { switchMap } from 'rxjs/operators';
import { AreaDeConhecimento } from 'src/app/model/Area-de-conhecimento';

@Component({
  selector: 'app-area-de-conhecimento-edit',
  templateUrl: './area-de-conhecimento-edit.component.html',
  styleUrls: ['./area-de-conhecimento-edit.component.css']
})
export class AreaDeConhecimentoEditComponent implements OnInit {
  profileForm: FormGroup;
  areaDeConhecimento: AreaDeConhecimento = new AreaDeConhecimento;
  editForm: FormGroup;
  editedItem: AreaDeConhecimento;
  alert: boolean;
  alertSuccess: Boolean;
  alertDanger: Boolean;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,    
    private service: AreaDeConhecimentoService,
    private areaDeConhecimentoService: AreaDeConhecimentoService,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();

    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getAreaDeConhecimento(+params.get("id")))
      ).subscribe(areaDeConhecimento=>{
        this.areaDeConhecimento = areaDeConhecimento;
        this.preenchaCampos(this.areaDeConhecimento);
        console.log(areaDeConhecimento);
      });
  }

  onSubmit(){
    let id = this.areaDeConhecimento.id;
    this.areaDeConhecimento = new AreaDeConhecimento;
    this.areaDeConhecimento.id = id;
    this.areaDeConhecimento.nome = this.profileForm.value.nome;
    
    this.alert = null;
    window.location.reload();
    this.service.edit(this.areaDeConhecimento).subscribe(data=>{
     
        this.alert = true; 
        this.profileForm.controls.numero.setValue("");  
        window.location.reload();  
    },
    error=>{
      this.handleError(error)
 
    });

} 
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  preenchaCampos(areaDeConhecimento: AreaDeConhecimento) {
    this.profileForm.controls.nome.setValue(areaDeConhecimento.nome);
  }
  criaFormulario() {
    this.profileForm = this.fb.group({
      nome:['', Validators.compose([])],
      
    });
  }

  onUpdateDetails(){

    // Updating form value
    this.profileForm.patchValue({
        'nome': this.editedItem.nome,
    });
    this.editForm.updateValueAndValidity();
  }

}
