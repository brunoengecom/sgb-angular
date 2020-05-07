import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Emprestimo } from 'src/app/model/emprestimo';

@Component({
  selector: 'app-emprestimo-save',
  templateUrl: './emprestimo-save.component.html',
  styleUrls: ['./emprestimo-save.component.css']
})
export class EmprestimoSaveComponent implements OnInit {
  emprestimo: Emprestimo
  cpf:number;
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  linesPerPage: number = 0;

  constructor(
    private service: EmprestimoService,
    private route: ActivatedRoute

  ) { }

  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getCPF(+params.get("cpf")))
    ).subscribe(
      data =>{
        this.cpf = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        this.linesPerPage = data['linesPerPage'];
      }
    );

    this.service.getCPF(this.cpf).subscribe(
      data =>{
        this.cpf = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        this.linesPerPage = data['linesPerPage'];
      }
    );
  }

}
