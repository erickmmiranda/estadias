import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { utf8Encode } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  faAdd = faPlusCircle;

  archivos : any;
  email: any;
  byUser : any;
  tipoUsu : any;
  
  constructor(private dataService: ApiService, private router : Router) { 
    if(this.dataService.getTipo() == "verificador"){
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(){
    this.getDocuments();
    this.peticionDocumentos();
    this.getTipoUsu();
  }

  peticionDocumentos(){
    this.dataService.obtenerDocumentos().subscribe((data : Array<object>) => {
      this.archivos = data;    
    });
  }  

  refrescar(){
    this.getDocuments
    this.peticionDocumentos();
  }

  getDocuments(){
    this.email = this.dataService.getEmail() + "";
    this.dataService.getDocumentByUser(this.email).subscribe((data : Array<object>) =>{    
      this.byUser = data;
      ;
    });

  }

  getTipoUsu(){
    this.tipoUsu = this.dataService.getTipo();
  }

}
