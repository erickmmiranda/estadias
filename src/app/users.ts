export class Users {
    public id: number;
    public name: string;
    public apellidos: string;
    public passwrord:string;
    public email:string;
    public num_nomina:number;
    public tipo:string;

    
    constructor(Id:number,
                name: string,
                apellidos: string,
                passwrord:string,
                email:string,
                num_nomina:number,
                tipo: string ) {
    this.id = Id;
    this.name = name;
    this.apellidos = apellidos;
    this.passwrord = passwrord;
    this.email = email;
    this.num_nomina = num_nomina;
    this.tipo = tipo;
    }
    }