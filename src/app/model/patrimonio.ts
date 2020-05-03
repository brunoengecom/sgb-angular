import { Editora } from './editora';
import { Livro } from './livro';

export class Patrimonio{
    id : number;
    numero : string;
    livro : Livro;

    constructor(){
        this.livro = new Livro;
    }
}