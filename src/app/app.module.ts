import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavegacaoComponent } from './utils/navegacao/navegacao.component';
import { LivroComponent } from './pages/livro/livro.component';
import { LoginComponent } from './pages/login/login.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { LivroDetalhesComponent } from './pages/livro/livro-detalhes/livro-detalhes.component';
import { LivroEditComponent } from './pages/livro/livro-edit/livro-edit.component';
import { EditoraComponent } from './pages/editora/editora.component';
import { AreaDeConhecimentoComponent } from './pages/area-de-conhecimento/area-de-conhecimento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginInteceptor } from './pages/login/loginInteceptor';
import { LogoutComponent } from './pages/logout/logout.component';
import { LivroCadastrarComponent } from './pages/livro/livro-cadastrar/livro-cadastrar.component';
import { PatrimonioComponent } from './pages/patrimonio/patrimonio.component';
import { TurmaComponent } from './pages/turma/turma.component';
import { CursoComponent } from './pages/curso/curso.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioDetalhesComponent } from './pages/usuario/usuario-detalhes/usuario-detalhes.component';
import { CursoDetalhesComponent } from './pages/curso/curso-detalhes/curso-detalhes.component';
import { PatrimonioDetalhesComponent } from './pages/patrimonio/patrimonio-detalhes/patrimonio-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacaoComponent,
    LivroComponent,
    LoginComponent,
    FuncionarioComponent,
    LivroDetalhesComponent,
    LivroEditComponent,
    EditoraComponent,
    AreaDeConhecimentoComponent,
    LogoutComponent,
    LivroCadastrarComponent,
    PatrimonioComponent,
    TurmaComponent,
    CursoComponent,
    UsuarioComponent,
    UsuarioDetalhesComponent,
    CursoDetalhesComponent,
    PatrimonioDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoginInteceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }