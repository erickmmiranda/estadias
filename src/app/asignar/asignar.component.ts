import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private dataService: ApiService) { }

  id: any;
  verificadores: any;
  documento: any;

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    this.id = routeParams.id;
    this.getDocumentById();
    this.getVerificadores();

  }


  getVerificadores(): void{
    this.dataService.obtenerVerificador().subscribe((data: any) => {
      this.verificadores = data;
      console.log(this.verificadores);
    });
  }

  getDocumentById(): void{
    this.dataService.obtenerDocumentById(this.id).subscribe((data: any) => {
      this.documento = data;
      console.log(this.documento);
    });
  }

}
