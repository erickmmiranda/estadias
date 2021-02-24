import { Component, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {
  faPdf = faFilePdf;
  faZip = faFileArchive;
  faJpg = faFileImage;
  faPng = faFileImage;
  faPptx = faFilePowerpoint;
  faDocx = faFileWord;
  faDelete = faTrashAlt;
  faEdit = faEdit; 
  faAdd = faPlusCircle;

  archivos : any;
  baseUrl:string = "http://localhost/estadias/php";


  constructor(private dataService: ApiService,private httpClient : HttpClient, private router : Router) { 

  }

  ngOnInit(): void {
    this.peticionDocumentos();
  }

  peticionDocumentos(){
    this.dataService.obtenerDocumentos().subscribe((data : Array<object>) => {
      this.archivos = data;
      console.log(this.archivos);
    });
  }  

  borrar(item : any){
    const detalles = {
      'ruta-archivo' : item.ruta + "/" + item.nombre
    }

    this.httpClient.get(this.baseUrl + "/borrar-archivos.php", { params : detalles}).subscribe(() =>{
      console.log("Archivo eliminado");
    });

  }
  
}
