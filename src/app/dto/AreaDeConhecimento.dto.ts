import { Usuario } from '../model/usuario';
import { AreaDeConhecimento } from '../model/Area-de-conhecimento';

export class AreaDeConhecimentoDTO{
    nome:String;
	
    constructor(areadeconhecimento:AreaDeConhecimento){
        this.nome = areadeconhecimento.nome;        
    }
}