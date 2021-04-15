import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { faFilePdf, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
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
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-verificador',
  templateUrl: './item-verificador.component.html',
  styleUrls: ['./item-verificador.component.css']
})
export class ItemVerificadorComponent implements OnInit {

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
  alert : any;

  tipo : any;

  ruta:string="assets/docs/"

  baseUrl:string = "http://localhost/estadias/php";

  edicionActiva: Boolean = false;

  verificar : Boolean = false;
  rechazar : Boolean = false;

  modeloItem! : string;

  validar_n: boolean = false;
  campo_n : boolean = true;

  mensaje! : string;

  @Input()
  itemInfo : any;

  @Input()
  documentoInfo : any;

  @Output()
  actualizar : EventEmitter<number> = new EventEmitter();

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: ApiService, private httpClient: HttpClient, private router: Router) {
    if(this.dataService.getTipo() != "verificador"){
      this.router.navigate(['dashboard']);
    }
    
    this.angForm = this.fb.group({
      comentario: ['', [Validators.required,Validators.minLength(1)]]
      });

  }

  ngOnInit(): void {
    this.tipoUsuario();
  }

  tipoUsuario(){
    this.tipo = this.dataService.getTipo();
  }

  aceptarVerificar(){
    this.edicionActiva = true;
    this.verificar = true;
  }

  aceptarRechazar(){
    this.edicionActiva = true;
    this.rechazar = true;
  }

  cancelarVerificar(){
    this.edicionActiva = false;
    this.verificar = false;
    this.mensaje = "";
  }

  cancelarRechazar(){
    this.edicionActiva = false;
    this.rechazar = false;
    this.mensaje = "";
  }

  setVisto(id_doc: any){
    let id_usu : any = this.dataService.getId();
    this.dataService.setVisto(id_doc, id_usu, 1).subscribe((data : Array<object>) =>{ 
      this.actualizar.emit();
    });
  }

  verificarDocumento(angForm1: { value: { comentario: any; }; }, id_doc : any)
    {
      if(angForm1.value.comentario ==""){
        alert("El campo es requerido");
      }
      else{
        this.alert = confirm("¿Quieres verificar este documento?")
        if(this.alert == true){
          let id_usu : any = this.dataService.getId();
          this.dataService.validarDocumento(id_doc,id_usu,1,angForm1.value.comentario).subscribe((data : any) =>{
            location.reload();
          });
        }
        else if(this.alert == false){
          this.cancelarVerificar();
        }
      }         
    }

    rechazarDocumento(angForm1: { value: { comentario: any; }; }, id_doc : any)
    {
      if(angForm1.value.comentario ==""){
        alert("El campo es requerido");
      }
      else{
        this.alert = confirm("¿Quieres rechazar este documento?")
        if(this.alert == true){
          let id_usu : any = this.dataService.getId();
          this.dataService.rechazarDocumento(id_doc,id_usu,1,angForm1.value.comentario).subscribe((data : any) =>{
            location.reload();
          });
        }
        else if(this.alert == false){
          this.cancelarVerificar();
        }
      } 
    }

  get comentario() { return this.angForm.get('comentario'); }

}
