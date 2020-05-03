import { Turma } from '../model/turma';

export class TurmaDto{
    dtInicio: Date;
    dtFim: Date;
    periodo: String;
    curso: number;
    constructor(turma: Turma){
        this.dtInicio = turma.dtInicio;
        this.dtFim = turma.dtFim;
        this.periodo = turma.periodo;
        this.curso = turma.curso.id;
    }
}