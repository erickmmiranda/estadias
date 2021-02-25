import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  faAdd = faPlusCircle;

  archivos : any;

  constructor(private dataService: ApiService) { 

  }

  ngOnInit(): void {
    this.peticionDocumentos();
  }

  peticionDocumentos(){
    this.dataService.obtenerDocumentos().subscribe((data : Array<object>) => {
      this.archivos = data;
    });
  }  

  refrescar(){
    this.peticionDocumentos();
  }

}
