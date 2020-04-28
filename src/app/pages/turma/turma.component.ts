import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/model/turma';
import { TurmaService } from 'src/app/service/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turmas: Array<Turma> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(
    private service : TurmaService 
  ) { }

  ngOnInit(): void {
    this.service.getTurmas(this.page).subscribe(
      data =>{
        this.turmas = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
  }

}
