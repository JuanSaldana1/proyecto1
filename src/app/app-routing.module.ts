import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ListClientsComponent} from "./clients/list-clients/list-clients.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {MunicipiosComponent} from "./municipios/municipios.component";
import {CreateComponent} from "./tutorials/create/create.component";
import {TutorialsComponent} from "./tutorials/tutorials.component";
import {ListaTareasComponent} from "./lista-tareas/lista-tareas.component";
import {AngularMaterialComponent} from "./angular-material/angular-material.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'clientes', component: ListClientsComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'municipios', component: MunicipiosComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'material', component: AngularMaterialComponent},
  {path: 'createTutorial', component: CreateComponent},
  {path: 'listaTareas', component: ListaTareasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
