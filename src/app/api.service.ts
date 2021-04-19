import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Params } from '@angular/router';

@Injectable({
providedIn: 'root'
})

export class ApiService {
    redirectUrl!: string;
    tipo : string = "";

baseUrl:string = "http://localhost/estadias/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
@Output() getAdministrator: EventEmitter<any> = new EventEmitter();
@Output() enviarNotificacion: EventEmitter<any> = new EventEmitter();
constructor(private httpClient: HttpClient) { }


public userlogin(username: any, password: any) {
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.tipo = Users[0].tipo;
this.setEmail(Users[0].email);
this.setTipo(Users[0].tipo);
this.setToken(Users[0].nombre);
this.setId(Users[0].id);
let notificacion : any;
this.getNotificacion(Users[0].id).subscribe((data: any) =>{
 notificacion = data.cantidad;
});
this.enviarNotificacion.emit(notificacion);
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

 /// Usuarios
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
public obtenerDocumentos(){
    return this.httpClient.get<any>(this.baseUrl + '/leer-archivos.php');
} 

public updateUser(id :any, nombre: any,email: any,password: any, apellidos: any, num_nomina: any, tipo: any) {
    return this.httpClient.post<any>(this.baseUrl + '/update.php', {id,nombre,email, password, apellidos, num_nomina, tipo })
    .pipe(map(Users => {
    return Users;
    }));
    
}

/// Documentos

public uploadFile(archivo : any) {
    return this.httpClient.post(`${this.baseUrl}/subirArchivo.php`, JSON.stringify(archivo));
  }
  
public registrarDocumentos(archivo: string, email: any) {
    return this.httpClient.post<any>(this.baseUrl + '/registrarDocumento.php', {archivo, email})
    .pipe(map(Documents => {
    return Documents;
    }));
}

public getDocumentByUser(email: string){
    return this.httpClient.get<any>(this.baseUrl + '/getDocumentByUser.php?email=' + email);
}
public getDocumentByAsignado(email: string){
    return this.httpClient.get<any>(this.baseUrl + '/getDocumentByAsignado.php?email=' + email);
}
public getDocumentByVerificador(id: string){
    return this.httpClient.get<any>(this.baseUrl + '/getDocumentByVerificador.php?id=' + id);
}

public obtenerVerificador(){
    return this.httpClient.get<any>(this.baseUrl + '/listAsignar.php');
}

public obtenerDocumentById(id: any){
    return this.httpClient.get<any>(this.baseUrl + '/getDocumentById.php?id=' + id);
}

public validarDocumento(id_doc: any, id_usu: any, val : any, comentario : any){
    return this.httpClient.post<any>(this.baseUrl + '/validarDocumento.php', {id_doc,id_usu,val,comentario});
}

public rechazarDocumento(id_doc: any, id_usu: any, val : any, comentario : any){ 
    return this.httpClient.post<any>(this.baseUrl + '/rechazarDocumento.php', {id_doc,id_usu,val,comentario});
}

public getNotificacion(id_usu: any){
    return this.httpClient.get<any>(this.baseUrl + '/getNotificacion.php?id=' + id_usu);
}

public setVisto(id_doc: any, id_usu: any, val : any){
    return this.httpClient.post<any>(this.baseUrl + '/setVisto.php', {id_doc,id_usu,val});
}

public getComentarios(id_doc: any){
    return this.httpClient.get<any>(this.baseUrl + '/getComentarios.php?id=' + id_doc);
}

public getPersonasAsignadas(id_doc: any){
    return this.httpClient.get<any>(this.baseUrl + '/getPersonasAsignadas.php?id=' + id_doc);
}

//token
setToken(token: string) {
    sessionStorage.setItem('token', token);
}
getToken() {
    return sessionStorage.getItem('token');
}
deleteToken() {
    sessionStorage.removeItem('token');
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
    sessionStorage.setItem('tipo', tipo);
}
getTipo(){
    return sessionStorage.getItem('tipo');
}
deleteTipo(){
    sessionStorage.removeItem('tipo');
}

// Email

setEmail(email : string){
    sessionStorage.setItem('email', email);
}
getEmail(){
    return sessionStorage.getItem('email');
}
deleteEmail(){
    sessionStorage.removeItem('email');
}

// Email

setId(id : string){
    sessionStorage.setItem('id', id);
}
getId(){
    return sessionStorage.getItem('id');
}
deleteId(){
    sessionStorage.removeItem('id');
}


}