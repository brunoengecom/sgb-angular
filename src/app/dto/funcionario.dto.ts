import { Usuario } from '../model/usuario';

export class FuncionarioDTO{
    nome:String;
	email:String;
	dataNasc:Date;
	cpf:String;
    cargo:String;
    
    constructor(usuario:Usuario){
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.dataNasc = usuario.dataNasc;
        this.cpf = usuario.cpf;
        this.cargo = usuario.cargo;
    }
}