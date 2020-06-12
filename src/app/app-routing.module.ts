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
import { EditoraSaveComponent } from './pages/editora/editora-save/editora-save.component';
import { TurmaSaveComponent } from './pages/turma/turma-save/turma-save.component';
import { EmprestimoComponent } from './pages/emprestimo/emprestimo.component';
import { PatrimonioSaveComponent } from './pages/patrimonio/patrimonio-save/patrimonio-save.component';
import { UsuarioSaveComponent } from './pages/usuario/usuario-save/usuario-save.component';
import { ListLivrosComponent } from './pages/area-de-conhecimento/list-livros/list-livros.component';
import { EmprestimoSaveComponent } from './pages/emprestimo/emprestimo-save/emprestimo-save.component';
import { DevolucaoEmprestimoComponent } from './pages/emprestimo/devolucao-emprestimo/devolucao-emprestimo.component';
import { ListLivrosEditoraComponent } from './pages/editora/list-livros-editora/list-livros-editora.component';
import { EditoraEditComponent } from './pages/editora/editora-edit/editora-edit.component';
import { AreaDeConhecimentoEditComponent } from './pages/area-de-conhecimento/area-de-conhecimento-edit/area-de-conhecimento-edit.component';


const routes:Routes=[
  {path:'livro/:id/editora', component: ListLivrosEditoraComponent},  
  {path:'editora/edit/:id', component: EditoraEditComponent},
  {path:'editora/save', component: EditoraSaveComponent},
  {path:'editora', component: EditoraComponent},  
  {path:'area-de-conhecimento/edit/:id', component: AreaDeConhecimentoEditComponent},
  {path:'area-de-conhecimento', component: AreaDeConhecimentoComponent},
  {path: 'patrimonio/page/:id', component: PatrimonioComponent},
  {path: 'patrimonio/:id/save', component: PatrimonioSaveComponent},
  {path: 'patrimonio/:id', component: PatrimonioDetalhesComponent},  
  {path: 'turma/:id/save', component: TurmaSaveComponent},
  {path: 'turma/save', component: TurmaSaveComponent},
  {path: 'turma', component: TurmaComponent},
  {path: 'curso/:id', component: CursoDetalhesComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'usuario/save', component: UsuarioSaveComponent},
  {path: 'usuario/:id', component: UsuarioDetalhesComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'devolucao-emprestimo', component: DevolucaoEmprestimoComponent},
  {path:'emprestimo/save',component: EmprestimoSaveComponent},
  {path:'emprestimo',component: EmprestimoComponent},

  {path:'livro/:id/area-de-conhecimento', component: ListLivrosComponent},
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
