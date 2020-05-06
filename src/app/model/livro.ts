import { Editora } from './editora';
import { AreaDeConhecimento } from './Area-de-conhecimento';

export class Livro{
    areasDeConhecimento(areasDeConhecimento: any) {
      throw new Error("Method not implemented.");
    }
    
    id : number;
    nome : string;
    edicao : number;
    ano : number;
    isbn : string;
    editora : Editora;
    areaDeConhecimento : AreaDeConhecimento;
    autores : Array<string>=[];
    valor: number;
}