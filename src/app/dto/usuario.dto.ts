import { Usuario } from '../model/usuario';

export class UsuarioDto{
    usuario:Usuario;
    nome: String;
    email: String;
    dataNasc: Date;
    status: String;
    cargo: String;

    
    
}