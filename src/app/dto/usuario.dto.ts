import { Usuario } from '../model/usuario';

export class UsuarioDto{
    nome: string;
    email: string;
    dataNac: Date;
    status: number;
    cargo: string;
  static usuario: any;
    
}