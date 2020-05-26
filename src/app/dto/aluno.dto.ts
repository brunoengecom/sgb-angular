import { Usuario } from '../model/usuario';

export class AlunoDTO{
    nome:String;
	dataNasc:Date;
	cpf:String;
	email:String;
	turma:number;
    matricula:number;
    
    constructor(usuario:Usuario){
        this.nome = usuario.nome;
        this.dataNasc = usuario.dataNasc;
        this.cpf = usuario.cpf;
        this.email = usuario.email;
        this.matricula = usuario.matriculas[0].numero;
        this.turma = usuario.matriculas[0].turma.id;
    }
}