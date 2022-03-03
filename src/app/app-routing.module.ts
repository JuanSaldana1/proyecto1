import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ListClientsComponent} from "./clients/list-clients/list-clients.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {MunicipiosComponent} from "./municipios/municipios.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'clientes', component: ListClientsComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'municipios', component: MunicipiosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
