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
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MunicipiosComponent} from './municipios/municipios.component';

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
        MunicipiosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MdbModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
