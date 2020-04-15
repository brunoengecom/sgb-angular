import { Component, OnInit } from '@angular/core';
import { Editora } from 'src/app/model/editora';
import { Pageable } from 'src/app/utils/pageable';
import { EditoraService } from 'src/app/service/editora.service';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  editoras: Array<Editora> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;


  constructor(
    private service: EditoraService
  ) {}

  ngOnInit(): void {
    
    this.service.getEditoras(this.page).subscribe(
      data =>{
        this.editoras = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
  }

}
