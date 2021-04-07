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
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { MenuDocumentComponent } from './menu-document/menu-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { AsignarComponent } from './asignar/asignar.component';
import { DocAsignadosComponent } from './doc-asignados/doc-asignados.component';
import { DocsVerificadorComponent } from './docs-verificador/docs-verificador.component';
import { DocsValidadosComponent } from './docs-validados/docs-validados.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'menu-usuario', component: MenuUsuariosComponent,canActivate: [AuthguardGuard]  },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent,canActivate: [AuthguardGuard]  },
{ path: 'view', component: ViewUserComponent,canActivate: [AuthguardGuard]  },
{ path: 'asignar/:id', component: AsignarComponent,canActivate: [AuthguardGuard]  },
{ path: 'upload-document', component: UploadDocumentComponent,canActivate: [AuthguardGuard]  },
{ path: 'menu-document', component: MenuDocumentComponent,canActivate: [AuthguardGuard]  },
{ path: 'list-document', component: ListDocumentComponent,canActivate: [AuthguardGuard]  },
{ path: 'edit/:id', component: EditarComponent, canActivate: [AuthguardGuard]  },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'doc-asignados', component: DocAsignadosComponent,canActivate: [AuthguardGuard] },
{ path: 'doc-verificador', component: DocsVerificadorComponent,canActivate: [AuthguardGuard] },
{ path: 'docs-validados', component: DocsValidadosComponent,canActivate: [AuthguardGuard] }
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }