import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    faUser = faUser;
    faKey = faKey;
    validar_e : Boolean = false;
    validar_p : Boolean = false;
    campo_e : Boolean = true;
    campo_p : Boolean = true;
    angForm: FormGroup;
    constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
    email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    password: ['', Validators.required]
    });

    }
    
    ngOnInit() {
    }
    postdata(angForm1: { value: { email: any; password: any; }; })
    {
        this.validar_e = false;
        this.validar_p = false;
        this.campo_e= true;
        this.campo_p= true;
        if(angForm1.value.email==""){
            this.validar_e = true;
            this.campo_e = false;
        }
        if(angForm1.value.password==""){
            this.validar_p = true
            this.campo_p= false;
        }
        if(angForm1.value.email != "" && angForm1.value.password !=""){
            this.validar_e = false;
            this.validar_p = false;
            this.campo_e= true;
            this.campo_p= true;
            this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
            .pipe(first())
            .subscribe(
            data => {
            const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
            this.router.navigate([redirect]);
            },
            error => {
            alert("Usuario o password incorrectos");
            });  
        }
      

    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
}