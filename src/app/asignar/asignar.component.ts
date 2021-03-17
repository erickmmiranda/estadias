import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {
  id: any;
  verificadores: any;
  documento: any;

  form: FormGroup;
  baseUrl:string = "http://localhost/estadias/php";

  constructor(private routes: ActivatedRoute, private dataService: ApiService, private fb: FormBuilder, private httpClient: HttpClient) {
    this.form = this.fb.group({
      checkArray : this.fb.array([])
    })
   }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    this.id = routeParams.id;
    this.getDocumentById();
    this.getVerificadores();

  }


  getVerificadores(): void{
    this.dataService.obtenerVerificador().subscribe((data: any) => {
      this.verificadores = data;
    });
  }

  getDocumentById(): void{
    this.dataService.obtenerDocumentById(this.id).subscribe((data: any) => {
      this.documento = data;
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
     checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    const usuarios: any = this.form.value.checkArray;
    usuarios.forEach((element: any) => {
      console.log(element);
      const detalles = {
        'id_usuario' : element,
        'id_doc' : this.id
      }
      this.httpClient.get<any>(this.baseUrl + '/asignarDocumentos.php', {params: detalles}).subscribe((resultado: any) => {
      });
    });
  }

}
