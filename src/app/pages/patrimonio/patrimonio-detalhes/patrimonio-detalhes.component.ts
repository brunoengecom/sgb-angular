
import { Patrimonio } from 'src/app/model/patrimonio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LivroService } from 'src/app/service/livro.service';
import { switchMap } from 'rxjs/operators';
import { PatrimonioService } from 'src/app/service/patrimonio.service';

@Component({
  selector: 'app-patrimonio-detalhes',
  templateUrl: './patrimonio-detalhes.component.html',
  styleUrls: ['./patrimonio-detalhes.component.css']
})
export class PatrimonioDetalhesComponent implements OnInit {
  patrimonio:Patrimonio=new Patrimonio;
  id:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PatrimonioService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getPatrimonio(+params.get("id")))
      ).subscribe(patrimonio=>{
        console.log(patrimonio);
        this.patrimonio = patrimonio;
      });
  }

}
