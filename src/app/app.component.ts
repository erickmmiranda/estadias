import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Users } from './users';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
    faLogout = faSignOutAlt;
    faUsers = faUsers;
    faLogin = faSignInAlt;
    faFolder = faFolder;
    faPerfil = faUserCircle;
    faEmail = faAt;
    faUsername = faUser;
    loginbtn:boolean;
    logoutbtn:boolean;
    administrador: any;
    nombreUsuario: any;
    correoUsuario: any;
    notificacion : any;
    
    constructor(private dataService: ApiService, private router: Router) {
    dataService.getLoggedInName.subscribe((name: boolean) => this.changeName(name));
    dataService.getAdministrator.subscribe((administrador : string) => this.changeAdministrador(administrador));
    dataService.enviarNotificacion.subscribe((data : any) => this.getNotificacion());
    if(this.dataService.isLoggedIn())
    {
        this.administrador = this.dataService.getTipo();
        this.loginbtn=false;
        this.logoutbtn=true
        this.getNotificacion();
    }
    else{
        this.loginbtn=true;
        this.logoutbtn=false
    }
    
    }
    
    private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
    }

    private changeAdministrador(tipo : string){
        this.administrador = tipo;
    }

    obtenerDatos(){
        this.nombreUsuario = this.dataService.getToken();
        this.correoUsuario = this.dataService.getEmail();
    }

    getNotificacion(){
        if(this.dataService.getTipo() == "verificador"){
            let id_usu = this.dataService.getId();
            this.dataService.getNotificacion(id_usu).subscribe((data : any) =>{
                this.notificacion = data[0].cantidad;
            });
        }
    }

    logout()
    {
    this.dataService.deleteToken();
    this.dataService.deleteTipo();
    this.dataService.deleteEmail();
    this.dataService.deleteId();
    location.href = window.location.href;
    this.router.navigate( ['/login']);
    this.administrador = "";
    location.reload();
    }

    
}