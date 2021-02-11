import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
    redirectUrl!: string;
baseUrl:string = "http://localhost/estadias/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username: any, password: any) {
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public userregistration(nombre: any,email: any,password: any, apellidos: any, num_nomina: any, tipo: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { nombre,email, password, apellidos, num_nomina, tipo })
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
}