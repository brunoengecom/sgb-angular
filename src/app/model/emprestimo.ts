import { Usuario } from './usuario';
import { Multa } from './multa';
import { Patrimonio } from './patrimonio';
import { PrazoEmprestimo } from './prazoEmprestimo';

export class Emprestimo{
    id : number;
    patrimonio : Patrimonio;
    usuario:Usuario;
    multa: Array<Multa>=[];
    bibliotecarioEmprestimo:Usuario;
    bibliotecarioDevolucao:Usuario;
    prazoEmprestimo: PrazoEmprestimo;
    aquisicao: Date;
    diaDevolucao: Date;
}