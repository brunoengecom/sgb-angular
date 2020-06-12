import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { LivroService } from 'src/app/service/livro.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Editora } from 'src/app/model/editora';

@Component({
  selector: 'app-list-livros-editora',
  templateUrl: './list-livros-editora.component.html',
  styleUrls: ['./list-livros-editora.component.css']
})
export class ListLivrosEditoraComponent implements OnInit {
  livros: Array<Livro> = [];
  editora:Array<Editora>=[];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  linesPerPage: number = 0;

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getLivrosByEditora(+params.get("id")))
    ).subscribe(
      data =>{
       
        this.livros = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        this.linesPerPage = data['linesPerPage'];
      }
    );

    this.service.getLivrosByEditora(this.page).subscribe(
      data =>{
        
        this.livros = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        this.linesPerPage = data['linesPerPage'];
      }
    );
  }

}
