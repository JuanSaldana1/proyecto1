import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comunidad, Municipio, Provincia} from "../models/municipio";

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {
  apiKey = '61851843ed9ab5144148a777ed8d82e25d084470048c47a1d8649a5e3e41e847';
  baseUrl = "https://apiv1.geoapi.es/";
  finalUrl = `&type=JSON&key=${this.apiKey}&sandbox=0`;
  urlComunidades = `${this.baseUrl}comunidades?type=JSON&key=61851843ed9ab5144148a777ed8d82e25d084470048c47a1d8649a5e3e41e847&sandbox=0`;
  urlProvincias = `${this.baseUrl}provincias?CCOM=`;
  urlMunicipios = `${this.baseUrl}municipios?CPRO=`;


  constructor(
    private http: HttpClient
  ) {
  }

  getComunidadesAutonomas() {
    return this.http.get<Observable<Comunidad[]>>(this.urlComunidades).pipe();
  }

  getProvinciasByComunidad(codigoComunidad: string) {
    let urlProvincia = this.urlProvincias + codigoComunidad + this.finalUrl;
    console.log(urlProvincia);
    return this.http.get<Observable<Provincia[]>>(urlProvincia).pipe();
  }

  getMunicipiosByProvincia(codigoProvincia: string) {
    return this.http.get<Observable<Municipio[]>>(`${this.urlMunicipios}${codigoProvincia}${this.finalUrl}`).pipe();
  }
}
