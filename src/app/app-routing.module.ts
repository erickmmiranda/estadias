import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { MenuUsuariosComponent } from './menu-usuarios/menu-usuarios.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'menu-usuario', component: MenuUsuariosComponent,canActivate: [AuthguardGuard]  },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent,canActivate: [AuthguardGuard]  },
{ path: 'view', component: ViewUserComponent,canActivate: [AuthguardGuard]  },
{ path: 'edit/:id', component: EditarComponent, canActivate: [AuthguardGuard]  },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }