
export class Usuario{
    id : number
    nome : String;
    dataNasc : Date;
    cargo : String;
    matricula : String;
    status : String;
    email : String;
    cpf : String;
    roles : Array<String> = [];
}