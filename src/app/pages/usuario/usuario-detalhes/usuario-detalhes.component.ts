import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { switchMap } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {
  usuario:Usuario=new Usuario;
  id:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.getUsuario(+params.get("id")))
      ).subscribe(usuario=>{
        this.usuario = usuario;
        console.log(usuario);
        
      });
  }

}
