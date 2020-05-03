import { AreaDeConhecimento } from '../model/Area-de-conhecimento';
import { Editora } from '../model/editora';

export class LivroDto{
    nome: string;
    edicao: number;
    ano: number;
    isbn: string;
    valor: number;
    editora:  Editora;
    autores: string;
    areaDeConhecimento: AreaDeConhecimento;

}