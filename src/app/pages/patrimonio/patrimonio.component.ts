import { Component, OnInit } from '@angular/core';
import { Patrimonio } from 'src/app/model/patrimonio';
import { PatrimonioService } from 'src/app/service/patrimonio.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit {
  patrimonios: Array<Patrimonio> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;
  linesPerPage: number = 0;
  

  constructor( 
    private service : PatrimonioService,
    private route : ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getPatrimonios(+params.get("id")))
      ).subscribe(data=>{
        this.page = data['number'];
        this.patrimonios = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        this.linesPerPage = data['number'];
      });
    
  }
  
  getPatrimonios(page: number){
    this.service.getPatrimonios(page).subscribe(
      data =>{
        this.page = data['number'];
        this.patrimonios = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage'];
        this.linesPerPage = data['linesPerPage']    
      }
    );
  }

}