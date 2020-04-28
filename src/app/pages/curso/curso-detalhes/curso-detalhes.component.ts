import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {
  curso:Curso=new Curso;
  id:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CursoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getCurso(+params.get("id")))
      ).subscribe(curso=>{
        console.log(curso);
        curso = curso;
      });
  }

}
