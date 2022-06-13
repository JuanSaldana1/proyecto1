/* eslint-disable new-cap */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { ContactComponent } from './contact/contact.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { LoginComponent } from './login/login.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { ProgressComponent } from './progress/progress.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './tutorials/create/create.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'clientes', component: ListClientsComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'municipios', component: MunicipiosComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'material', component: AngularMaterialComponent },
  { path: 'createTutorial', component: CreateComponent },
  { path: 'listaTareas', component: ListaTareasComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/**
  * We don't need to export the module because it is the default one
  * that gets imported by the AppModule
 */
export class AppRoutingModule {}
