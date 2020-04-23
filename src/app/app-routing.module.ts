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


const routes:Routes=[
  {path:'editora', component: EditoraComponent},
  {path:'area-de-conhecimento', component: AreaDeConhecimentoComponent},
  {path:'livro/edit/:id', component: LivroEditComponent},
  {path:'livro/:id', component: LivroDetalhesComponent},
  {path:'livro', component: LivroComponent},
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
