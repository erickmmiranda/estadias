import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent implements OnInit {
  faAddUsu = faUserPlus;
  faList = faListAlt;
 
  tipo: any;
  constructor(private apiService : ApiService,private router: Router) { 
                this.tipo = this.apiService.getTipo();
                if(this.tipo != "administrador"){
                  this.router.navigate(['dashboard']);
                }
  }

  ngOnInit(): void {
  }

  agregarUsuario:string="assets/img/editarUsuario.png"
  verUsuario:string="assets/img/verUsuario.png"

  agregarU()
  {
    this.router.navigate( ['/registration']);
  }

  verUsuarios()
  {
    this.router.navigate( ['/view']);
  }

}
