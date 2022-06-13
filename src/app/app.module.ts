/* eslint-disable new-cap */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MbscModule, mobiscroll } from '@mobiscroll/angular';
import { Store, StoreModule } from '@ngrx/store';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { ModifyClientComponent } from './clients/modify-client/modify-client.component';
import { ContactComponent } from './contact/contact.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { Modal1Component } from './home/modal1/modal1.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { MaterialModule } from './modules/material/material.module';
import { MdbModule } from './modules/mdb/mdb.module';
import { MobiscrollModule } from './modules/mobiscroll/mobiscroll.module';
import { PrimengModule } from './modules/primeng/primeng.module';
import { MunicipiosComponent } from './municipios/municipios.component';
import { ProgressComponent } from './progress/progress.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreateComponent } from './tutorials/create/create.component';
import { ReadComponent } from './tutorials/read/read.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

mobiscroll.settings = {
  theme: 'material',
  themeVariant: 'light',
  lang: 'es',
};

@NgModule({
  declarations: [
    AddClientComponent,
    AngularMaterialComponent,
    AppComponent,
    ContactComponent,
    CreateComponent,
    FormularioComponent,
    HomeComponent,
    ListClientsComponent,
    ListaTareasComponent,
    Modal1Component,
    ModifyClientComponent,
    MunicipiosComponent,
    NavbarComponent,
    ProgressComponent,
    ReadComponent,
    TutorialsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MbscModule,
    MdbModule,
    MobiscrollModule,
    PrimengModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
  ],
  providers: [MdbModalService, Store],
  bootstrap: [AppComponent],
})
/**
  * We don't need to export the module because it is the default one
  * that gets imported by the AppModule
 */
export class AppModule {}
