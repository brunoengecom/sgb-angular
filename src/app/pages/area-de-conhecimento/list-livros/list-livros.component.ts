import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { LivroService } from 'src/app/service/livro.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-livros',
  templateUrl: './list-livros.component.html',
  styleUrls: ['./list-livros.component.css']
})
export class ListLivrosComponent implements OnInit {
  livros: Array<Livro> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  linesPerPage: number = 0;

  constructor(
    private service: LivroService,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap)=>
        this.service.getLivrosByAreaDeConhecimento(+params.get("id")))
      ).subscribe(
        data =>{
          this.livros = data['content'];
          this.empty = data['empty'];
          this.totalElements = data['totalElements'];
          this.totalPage = data['totalPage'];
          this.linesPerPage = data['linesPerPage'];
        }
      );

      this.service.getLivrosByAreaDeConhecimento(this.page).subscribe(
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

