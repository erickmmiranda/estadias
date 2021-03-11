import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuUsuariosComponent } from './menu-usuarios/menu-usuarios.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditarComponent } from './editar/editar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { MenuDocumentComponent } from './menu-document/menu-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { ApiService } from './api.service';
import { FiltroExtensionPipe } from './filtro-extension.pipe';
import { ItemArchivoComponent } from './item-archivo/item-archivo.component';
import { AsignarComponent } from './asignar/asignar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CarouselComponent,
    MenuUsuariosComponent,
    ViewUserComponent,
    EditarComponent,
    UploadDocumentComponent,
    MenuDocumentComponent,
    ListDocumentComponent,
    FiltroExtensionPipe,
    ItemArchivoComponent,
    AsignarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
