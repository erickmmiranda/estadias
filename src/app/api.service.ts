import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
    redirectUrl!: string;
    tipo : string = "";

baseUrl:string = "http://localhost/estadias/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
@Output() getAdministrator: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username: any, password: any) {
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.tipo = Users[0].tipo;
this.setTipo(Users[0].tipo);
this.setToken(Users[0].nombre);
if(this.tipo == "administrator"){
    this.getAdministrator.emit(this.tipo);
}
else{
    this.getAdministrator.emit(this.tipo);
}
this.getLoggedInName.emit(true);
return Users;
}));

}


public userregistration(nombre: any,email: any,password: any, apellidos: any, num_nomina: any, tipo: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', {nombre,email, password, apellidos, num_nomina, tipo })
    .pipe(map(Users => {
    return Users;
    }));
}

public getUsers(){
    return this.httpClient.get<any>(this.baseUrl + '/list.php');
}

public deleteUser(id : number){
    return this.httpClient.get<any>(this.baseUrl + '/delete.php?id=' + id);
}

public getUserById(id : number){
    return this.httpClient.get<any>(this.baseUrl + '/getById.php?id=' + id);
}

public updateUser(id :any, nombre: any,email: any,password: any, apellidos: any, num_nomina: any, tipo: any) {
    return this.httpClient.post<any>(this.baseUrl + '/update.php', {id,nombre,email, password, apellidos, num_nomina, tipo })
    .pipe(map(Users => {
    return Users;
    }));
    
}


//token
setToken(token: string) {
    localStorage.setItem('token', token);
}
getToken() {
    return localStorage.getItem('token');
}
deleteToken() {
    localStorage.removeItem('token');
}
isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
}

// Tipo

setTipo(tipo : string){
    localStorage.setItem('tipo', tipo);
}
getTipo(){
    return localStorage.getItem('tipo');
}
deleteTipo(){
    localStorage.removeItem('tipo');
}


}