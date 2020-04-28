import { Component, OnInit } from '@angular/core';
import { Patrimonio } from 'src/app/model/patrimonio';
import { PatrimonioService } from 'src/app/service/patrimonio.service';

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

  constructor( 
    private service : PatrimonioService 

  ) { }

  ngOnInit(): void {
    this.service.getPatrimonios(this.page).subscribe(
      data =>{
        this.patrimonios = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
  }

}