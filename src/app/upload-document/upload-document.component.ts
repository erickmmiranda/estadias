import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ChildActivationStart, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  correo : any;
  nombrearchivo : string = "";
  archivo = {
    nombreArchivo: "",
    base64textString: "",
    correo : "",
  }

  constructor(private dataService: ApiService,private router:Router) {

            }

  ngOnInit(): void {
  }

  seleccionarArchivo(event: any) {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;

    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent : any) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload() {
    this.correo = this.dataService.getEmail();
    this.archivo.correo = this.correo;
    console.log(this.archivo);
    this.dataService.uploadFile(this.archivo).subscribe(
      (datos : any) => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        }
        else{
          alert("Error al subir archivo");
        }
      }
    );

    this.nombrearchivo = this.archivo.nombreArchivo;
    
    this.dataService.registrarDocumentos(
      this.archivo.nombreArchivo,
      this.archivo.correo)
      .pipe(first())
      .subscribe(
      data => {
      this.router.navigate(['list-document']);
      },
  
      error => {
      });

  }
  
}
