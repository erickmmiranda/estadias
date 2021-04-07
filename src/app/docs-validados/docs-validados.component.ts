import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faFileWord} from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-docs-validados',
  templateUrl: './docs-validados.component.html',
  styleUrls: ['./docs-validados.component.css']
})
export class DocsValidadosComponent implements OnInit {

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
  share = faShareAlt;

  archivos : any;
  email: any;
  byUser : any;
  tipoUsu : any;
  alert : any;

  baseUrl: string = "http://localhost/estadias/php";
  
  constructor(private dataService: ApiService, private httpClient: HttpClient) { 

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
    this.email = this.dataService.getEmail() + "";
    this.dataService.getDocumentByAsignado(this.email).subscribe((data : Array<object>) => {    
      this.byUser = data;
      console.log(data);
      
    });

  }

  getTipoUsu(){
    this.tipoUsu = this.dataService.getTipo();
  }

  borrar(item : any, id_doc : any){
    this.alert = confirm("¿Deseas eliminar este archivo?");
      if (this.alert == true){
        const detalles = {
          'ruta-archivo' : item.ruta + "/" + item.nombre,
          'archivo': item.nombre,
          'email': this.dataService.getEmail() + "",
          'id': id_doc
        }
    
        this.httpClient.get(this.baseUrl + "/borrar-archivos.php", { params : detalles}).subscribe(() => {
          
        });
    
      }
      else{
  
      }
    
  }

}
