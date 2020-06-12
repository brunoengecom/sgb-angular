import { Usuario } from '../model/usuario';
import { Editora } from '../model/editora';

export class EditoraDTO{
    nome:String;
	cnpj:String;
    
    constructor(editora:Editora){
        this.nome = editora.nome;
        this.cnpj = editora.cnpj;
    }
}