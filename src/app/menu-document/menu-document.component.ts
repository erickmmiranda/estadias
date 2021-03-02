import { Component, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
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

  tipoUsuarario(){
    this.tipo = this.dataService.getTipo();
  }

}
