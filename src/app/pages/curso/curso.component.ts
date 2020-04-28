import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos: Array<Curso> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(
    private service : CursoService 
  ) { }

  ngOnInit(): void {
    
    this.service.getCursos(this.page).subscribe(
      data =>{
        this.cursos = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
  }

}
