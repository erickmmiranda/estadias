import { Component, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu-document',
  templateUrl: './menu-document.component.html',
  styleUrls: ['./menu-document.component.css']
})
export class MenuDocumentComponent implements OnInit {
  faUpload = faUpload;
  faListDocument = faFolderOpen;
  faAsignados = faClipboardList;
  faCheck = faCheckCircle;
  faFiles = faFileAlt;
  tipo : any;

  constructor(private router : Router, private dataService : ApiService) { }

  ngOnInit(): void {
    this.tipoUsuarario();
  }

  agregarD()
  {
    this.router.navigate( ['/upload-document']);
  }

  verDocumentos()
  {
    this.router.navigate( ['/list-document']);
  }
  docAsignados()
  {
    this.router.navigate( ['/doc-asignados']);
  }
  docValidados()
  {
    this.router.navigate( ['/docs-validados']);
  }

  tipoUsuarario(){
    this.tipo = this.dataService.getTipo();
  }

  docVerificador()
  {
    this.router.navigate( ['/doc-verificador']);
  }
  
  docVerificadorRechazados()
  {
    this.router.navigate( ['/rechazados-verificador']);
  }

  docsChecked()
  {
    this.router.navigate( ['/docs-verificados']);
  }
}