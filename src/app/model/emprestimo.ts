import { Usuario } from './usuario';
import { Multa } from './multa';
import { Patrimonio } from './patrimonio';

export class Emprestimo{
    id : number;
    cpf : number;
    patrimonio : Patrimonio;
    usuario:Usuario;
    multa: Array<Multa>=[];
    
}