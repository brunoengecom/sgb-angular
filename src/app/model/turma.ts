import { Curso } from './curso';


export class Turma{
    id : number;
    dtInicio : Date;
    dtFim : Date;
    periodo : String;
    curso : Curso;
}