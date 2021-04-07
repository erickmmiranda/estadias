import { Component, OnInit } from '@angular/core';
import { faFilePdf, faFileArchive, faFileImage, faFilePowerpoint, faFileWord, faTrashAlt, faEdit, faPlusCircle, faFileExcel, faCheckCircle, faEye, faDownload, faShareAlt, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs-verificador',
  templateUrl: './docs-verificador.component.html',
  styleUrls: ['./docs-verificador.component.css']
})
export class DocsVerificadorComponent implements OnInit {

  faPdf = faFilePdf;
  faZip = faFileArchive;
  faJpg = faFileImage;
  faPng = faFileImage;
  faPptx = faFilePowerpoint;
  faDocx = faFileWord;
  faDelete = faTrashAlt;
  faEdit = faEdit; 
  faAdd = faPlusCircle;
  faExcel = faFileExcel;
  faFileCheck = faCheckCircle;
  faView = faEye;
  faDownload = faDownload;
  faCancelar = faMinusCircle;
  share = faShareAlt;

  archivos : any;
  id: any;
  byUser : any;
  tipoUsu : any;
  alert : any;

  baseUrl:string = "http://localhost/estadias/php";
  
  constructor(private dataService: ApiService, private httpClient: HttpClient, private router : Router) { 

  }

  ngOnInit(): void {
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
    this.id = this.dataService.getId();
    this.dataService.getDocumentByVerificador(this.id).subscribe((data : Array<object>) =>{    
      this.byUser = data;
    });

  }

  getTipoUsu(){
    this.tipoUsu = this.dataService.getTipo();
  }

  validarDocumento(id_doc : any){
    let id_usu : any = this.dataService.getId();
    this.router.navigate( ['/menu-document']);
    this.dataService.validarDocumento(id_doc, id_usu, 1).subscribe((data : Array<object>) =>{ 
      this.refrescar()   
    });
    
  }
  cancelarValidacionDocumento(id_doc : any){
    let id_usu : any = this.dataService.getId();
    this.router.navigate( ['/menu-document']);
    this.dataService.validarDocumento(id_doc, id_usu, 0).subscribe((data : Array<object>) =>{    
    });
    
  }

}
