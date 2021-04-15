import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-archivo',
  templateUrl: './item-archivo.component.html',
  styleUrls: ['./item-archivo.component.css']
})
export class ItemArchivoComponent implements OnInit {
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
  alert : any;

  tipo : any;

  ruta:string="assets/docs/"

  baseUrl:string = "http://localhost/estadias/php";

  edicionActiva: Boolean = false;

  modeloItem! : string;

  @Input()
  itemInfo : any;

  @Input()
  documentoInfo : any;

  @Output()
  cambioArchivo : EventEmitter<number> = new EventEmitter();

  constructor(private dataService: ApiService, private httpClient: HttpClient, private router: Router) {
    if(this.dataService.getTipo() == "verificador"){
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {
    this.tipoUsuario();
  }

  borrar(item : any, id_doc : any){
    this.alert = confirm("¿Deseas eliminar este archivo?");
      if(this.alert == true){
        const detalles = {
          'ruta-archivo' : item.ruta + "/" + item.nombre,
          'archivo': item.nombre,
          'email': this.dataService.getEmail() + "",
          'id': id_doc
        }
    
        this.httpClient.get(this.baseUrl + "/borrar-archivos.php", { params : detalles}).subscribe(() =>{
        this.cambioArchivo.emit();
        });
    
      }
      else{
  
      }
    
  }

  activarEdicion(nombre : any){
    this.modeloItem = nombre;
    this.edicionActiva = true;
  }

  desactivarEdicion(){
    this.edicionActiva = false;
  }

  renombrar(item :any){
    const detalles = {
      'ruta-archivo' : item.ruta + "/" + item.nombre,
      'nuevo-archivo' : item.ruta + "/" + this.modeloItem
    }

    this.httpClient.get(this.baseUrl + "/renombrar-archivo.php", { params : detalles}).subscribe(() =>{
      this.cambioArchivo.emit();
    });
  }

  tipoUsuario(){
    this.tipo = this.dataService.getTipo();
  }

  asignarDocumento(document: any) {
    this.router.navigate(['/asignar', document.id]);
  }

}
