import { AreaDeConhecimento } from '../model/Area-de-conhecimento';
import { Editora } from '../model/editora';
import { Livro } from '../model/livro';

export class LivroDto{
    nome: string;
    edicao: number;
    ano: number;
    isbn: string;
    valor: number;
    editora:  number;
    autores: Array<string>=[];
    areaDeConhecimento: number;

    constructor(
        livro:Livro
    ){
        this.nome = livro.nome;
        this.edicao = livro.edicao;
        this.ano = livro.ano;
        this.isbn = livro.isbn;
        this.valor = livro.valor;
        this.editora = livro.editora.id;
        this.autores = livro.autores;
        this.areaDeConhecimento = livro.areaDeConhecimento.id;
    }

}