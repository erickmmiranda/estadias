import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
    tipoU: any;
    validar_n: boolean = false;
    validar_a: boolean = false;
    validar_e: boolean = false;
    validar_p: boolean = false;
    validar_num: boolean = false;
    validar_t: boolean = false;

    campo_n : boolean = true;
    campo_a : boolean = true;
    campo_p : boolean = true;
    campo_e : boolean = true;
    campo_num : boolean = true;
    campo_t : boolean = true;
    

  constructor(
                private formBuilder: FormBuilder,
              private apiService: ApiService,
              private router : Router,
              private routes : ActivatedRoute
             
  ) { 
    this.tipoU = this.apiService.getTipo();
                if(this.tipoU != "administrador"){
                  this.router.navigate(['dashboard']);
                }
  }
  
  addForm!: FormGroup;
  id : number | undefined;

  ngOnInit(): void {
      const routeParams = this.routes.snapshot.params;
    //$_GET[]
  
      this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      num_nomina: ['', Validators.required],
      tipo: ['', Validators.required]
    });

    this.apiService.getUserById(routeParams.id).subscribe((data: any) => {
      this.addForm.patchValue(data);
    });
    this.id = routeParams.id;
 
  }

  
  
  onUpdate(angForm1: { value: { nombre: any; email: any; password: any; apellidos: any; num_nomina: any; tipo : any; }; })
  {
      this.validar_n = false;
      this.validar_a = false;
      this.validar_e = false;
      this.validar_p = false;
      this.validar_num = false;
      this.validar_t = false;

      this.campo_n = true;
      this.campo_a = true;
      this.campo_p = true;
      this.campo_e = true;
      this.campo_num = true;
      this.campo_t = true;
      

      if(angForm1.value.nombre==""){
          this.validar_n = true;
          this.campo_n = false;
      }
      if(angForm1.value.apellidos==""){
          this.validar_a = true
          this.campo_a = false;
      }
      if(angForm1.value.password==""){
          this.validar_p = true;
          this.campo_p = false;
      }
      if(angForm1.value.email==""){
          this.validar_e = true
          this.campo_e = false;
      }
      if(angForm1.value.num_nomina==""){
          this.validar_num = true;
          this.campo_num = false;
      }
      if(angForm1.value.tipo==""){
          this.validar_t = true
          this.campo_t = false;
      }
      if(angForm1.value.nombre !="" && angForm1.value.apellidos !="" && angForm1.value.password !="" && angForm1.value.email !="" && angForm1.value.num_nomina !="" && angForm1.value.tipo !=""){
          this.apiService.updateUser(
              this.id,
              angForm1.value.nombre,
              angForm1.value.email,
              angForm1.value.password,
              angForm1.value.apellidos,
              angForm1.value.num_nomina,
              angForm1.value.tipo)
          .pipe(first())
          .subscribe(
          data => {
          this.router.navigate(['view']);
          },
          
          error => {
          });
      }
      
  }
  
  get email() { return this.addForm.get('email'); }
  get password() { return this.addForm.get('password'); }
  get nombre() { return this.addForm.get('nombre'); }
  get num_nomina() { return this.addForm.get('num_nomina'); }
  get tipo() { return this.addForm.get('tipo'); }
  get apellidos() { return this.addForm.get('apellidos'); }

}
