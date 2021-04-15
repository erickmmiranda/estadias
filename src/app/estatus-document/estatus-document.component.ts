import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-estatus-document',
  templateUrl: './estatus-document.component.html',
  styleUrls: ['./estatus-document.component.css']
})
export class EstatusDocumentComponent implements OnInit {

  id: any;
  verificadores: any;
  documento: any;
  comentarios : any;
  personas : any;

  nombreDoc : any;
  fecha : any;

  constructor(private routes: ActivatedRoute, private dataService: ApiService, private router: Router) {

    if(this.dataService.getTipo() == "verificador"){
      this.router.navigate(['dashboard']);
    }
    
   }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    this.id = routeParams.id;
    this.getDocumentById();
    this.getComentariosVer();
    this.getPersonasAsignadas();
  }

  getDocumentById(): void{
    this.dataService.obtenerDocumentById(this.id).subscribe((data: any) => {
      this.nombreDoc = data[0].archivo;
      this.fecha = data[0].fecha;
    });
  }

  getComentariosVer(){
     this.dataService.getComentarios(this.id).subscribe((data : any) =>{
        this.comentarios = data;
     });
  }

  getPersonasAsignadas(){
    this.dataService.getPersonasAsignadas(this.id).subscribe((data : any) =>{
       this.personas = data;
    });
 }

}
