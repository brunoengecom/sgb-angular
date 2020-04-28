import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  totalPage: number;
  page: number = 0;
  empty: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(
    private service : UsuarioService 
  ) { }

  ngOnInit(): void {
    
    this.service.getUsuarios(this.page).subscribe(
      data =>{
        this.usuarios = data['content'];
        this.empty = data['empty'];
        this.totalElements = data['totalElements'];
        this.totalPage = data['totalPage']
      }
    );
  }

}
