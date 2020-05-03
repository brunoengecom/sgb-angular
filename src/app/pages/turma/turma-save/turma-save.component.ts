import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/model/turma';
import { TurmaService } from 'src/app/service/turma.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Editora } from 'src/app/model/editora';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';
import { switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-turma-save',
  templateUrl: './turma-save.component.html',
  styleUrls: ['./turma-save.component.css']
})
export class TurmaSaveComponent implements OnInit {
  
  profileForm: FormGroup;
  
  turma: Turma;
  curso: Curso;
  periodos: Array<String>=[];

  constructor(
    private service: TurmaService,
    private fb: FormBuilder,    
    private router: Router,
    private cursoService: CursoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.criaFormulario();
    this.service.getPeriodos().subscribe(data=>{
      this.periodos = data;
      console.log(data);
      
    });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.cursoService.getCurso(+params.get("id")))
      ).subscribe(curso=>{
        this.curso = curso;
      });
    }
  onSubmit(){
    this.turma = new Turma;
    this.turma.dtInicio = this.profileForm.value.dtInicio;
    this.turma.dtFim = this.profileForm.value.dtFim;
    this.turma.periodo = this.profileForm.value.periodo;
    this.turma.curso = this.curso;

    this.service.save(this.turma).subscribe(data=>{
      console.log(data);
      
        window.location.reload();
      
    },
    error=>{
      this.handleError(error)
    });
    
  }
  handleError(error: HttpErrorResponse) {
    throw new Error("Method not implemented.");
  }
  criaFormulario(){
    this.profileForm = this.fb.group({
      dtInicio:['',Validators.compose([Validators.required, Validators.minLength(10)])],
      dtFim:['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      periodo:['',Validators.compose([Validators.required])],
    });

}
}
