import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LivroService } from 'src/app/service/livro.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrls: ['./livro-detalhes.component.css']
})
export class LivroDetalhesComponent implements OnInit {
  livro:Livro;
  id:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LivroService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getLivro(+params.get("id")))
      ).subscribe(livro=>{
        console.log(livro);
        this.livro = livro;
      });
  }

}
