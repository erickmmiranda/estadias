import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
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

    angForm: FormGroup;
    constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
    email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    password: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipo: ['', Validators.required],
    num_nomina: ['', Validators.required],
    });
    }
    
    ngOnInit() {
    }
    
    postdata(angForm1: { value: { nombre: any; email: any; password: any; apellidos: any; num_nomina: any; tipo : any; }; })
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
            this.dataService.userregistration(
                angForm1.value.nombre,
                angForm1.value.email,
                angForm1.value.password,
                angForm1.value.apellidos,
                angForm1.value.num_nomina,
                angForm1.value.tipo)
            .pipe(first())
            .subscribe(
            data => {
            this.router.navigate(['login']);
            },
            
            error => {
            });
        }
        
    }
    
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
    get nombre() { return this.angForm.get('nombre'); }
    get num_nomina() { return this.angForm.get('num_nomina'); }
    get tipo() { return this.angForm.get('tipo'); }
    get apellidos() { return this.angForm.get('apellidos'); }
}