import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { Users } from '../users';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  faDelete = faTrashAlt;
  faEdit = faEdit; 
  faAdd = faPlusCircle;
  faAdmin = faUserShield;
  users: any;
  tipo: any;
  email: any;

  constructor(private apiService : ApiService,
              private router : Router) {
                this.tipo = this.apiService.getTipo();
                if(this.tipo != "administrador"){
                  this.router.navigate(['dashboard']);
                }
              }

  ngOnInit(): void {

    this.apiService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
    });
    
  }


  deleteUser(user : Users): void {
    this.email = this.apiService.getEmail();
    if(this.email == user.email){
      alert("No te puedes eliminar tu mismo");
    }
    else{
      this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter((u: Users)  => u !== user);
      });
    }
  }

  editUser(user: Users): void {
    this.router.navigate(['/edit', user.id]);
  }


}
