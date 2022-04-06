import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MdbModule} from "./modules/mdb/mdb.module";
import {Modal1Component} from './home/modal1/modal1.component';
import {ListClientsComponent} from './clients/list-clients/list-clients.component';
import {AddClientComponent} from './clients/add-client/add-client.component';
import {ModifyClientComponent} from './clients/modify-client/modify-client.component';
import {HttpClientModule} from "@angular/common/http";
import {FormularioComponent} from './formulario/formulario.component';
import {MaterialModule} from './modules/material/material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MunicipiosComponent} from './municipios/municipios.component';
import {Store, StoreModule} from "@ngrx/store";
import {ReadComponent} from './tutorials/read/read.component';
import {CreateComponent} from './tutorials/create/create.component';
import {TutorialsComponent} from './tutorials/tutorials.component';
import {PrimengModule} from "./modules/primeng/primeng.module";
import {ListaTareasComponent} from './lista-tareas/lista-tareas.component';
import {MbscModule, mobiscroll} from "@mobiscroll/angular";
import {MobiscrollModule} from "./modules/mobiscroll/mobiscroll.module";
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import { AngularMaterialComponent } from './angular-material/angular-material.component';

mobiscroll.settings = {
  theme: 'material',
  themeVariant: 'light',
  lang: 'es'
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    Modal1Component,
    ListClientsComponent,
    AddClientComponent,
    ModifyClientComponent,
    FormularioComponent,
    MunicipiosComponent,
    ReadComponent,
    CreateComponent,
    TutorialsComponent,
    ListaTareasComponent,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MdbModule,
    MbscModule,
    MobiscrollModule,
    PrimengModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({}),
  ],
  providers: [MdbModalService, Store],
  bootstrap: [AppComponent],
})
export class AppModule {
}
