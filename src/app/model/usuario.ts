import { Matricula } from './Matricula';

export class Usuario{
    id : number
    nome : String;
    dataNasc : Date;
    cargo : String;
    matriculas : Array<Matricula>=[];
    status : String;
    email : String;
    cpf : String;
    roles : Array<String> = [];
}