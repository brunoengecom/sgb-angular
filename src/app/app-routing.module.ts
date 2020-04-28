import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule,Routes } from '@angular/router'; 
import { EditoraComponent } from './pages/editora/editora.component';
import { AreaDeConhecimentoComponent } from './pages/area-de-conhecimento/area-de-conhecimento.component';
import { LivroEditComponent } from './pages/livro/livro-edit/livro-edit.component';
import { LivroDetalhesComponent } from './pages/livro/livro-detalhes/livro-detalhes.component';
import { LivroComponent } from './pages/livro/livro.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LivroCadastrarComponent } from './pages/livro/livro-cadastrar/livro-cadastrar.component';
import { PatrimonioComponent } from './pages/patrimonio/patrimonio.component';
import { TurmaComponent } from './pages/turma/turma.component';
import { CursoComponent } from './pages/curso/curso.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioDetalhesComponent } from './pages/usuario/usuario-detalhes/usuario-detalhes.component';
import { CursoDetalhesComponent } from './pages/curso/curso-detalhes/curso-detalhes.component';
import { PatrimonioDetalhesComponent } from './pages/patrimonio/patrimonio-detalhes/patrimonio-detalhes.component';


const routes:Routes=[
  {path:'editora', component: EditoraComponent},
  {path:'area-de-conhecimento', component: AreaDeConhecimentoComponent},
  {path: 'patrimonio/:id', component: PatrimonioDetalhesComponent},
  {path: 'patrimonio', component: PatrimonioComponent},
  {path: 'turma', component: TurmaComponent},
  {path: 'curso/:id', component: CursoDetalhesComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'usuario/:id', component: UsuarioDetalhesComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path:'livro/livro-cadastrar',component: LivroCadastrarComponent},
  {path:'livro/edit/:id', component: LivroEditComponent},
  {path:'livro/:id', component: LivroDetalhesComponent},
  {path:'livro', component: LivroComponent},
  {path:'logout', component: LogoutComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: HomeComponent}

]
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
