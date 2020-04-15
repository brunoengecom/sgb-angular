import { Editora } from './editora';

export interface Livro{
    id : number;
    nome : string;
    edicao : number;
    ano : number;
    isbn : string;
    editora : Editora;
    areaDeConhecimento : string;
    autores : string[];
}