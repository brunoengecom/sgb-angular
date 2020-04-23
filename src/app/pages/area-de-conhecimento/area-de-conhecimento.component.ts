import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AreaDeConhecimentoService } from 'src/app/service/area-de-conhecimento.service';
import { AreaDeConhecimento } from 'src/app/model/Area-de-conhecimento';


@Component({
  selector: 'app-area-de-conhecimento',
  templateUrl: './area-de-conhecimento.component.html',
  styleUrls: ['./area-de-conhecimento.component.css']
})
export class AreaDeConhecimentoComponent implements OnInit {
  profileForm = this.fb.group({
    nome:['']
  });
  areaConhecimento: AreaDeConhecimento;
  areasDeConhecimento: Array<AreaDeConhecimento> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(
    private service: AreaDeConhecimentoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.service.getAreaDeConhecimento(this.page).subscribe(
      data =>{
        this.areasDeConhecimento = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
  }
  onSubmit(){
    this.areaConhecimento = new AreaDeConhecimento;
    this.areaConhecimento.nome = this.profileForm.value.nome;
    this.areasDeConhecimento.push(this.areaConhecimento);
    this.service.save(this.areaConhecimento).subscribe(data=>{
      console.log(data);
      if(data["status"]==201){
        
      }
    });
  }

}
