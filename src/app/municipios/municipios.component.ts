import { Component, OnInit } from '@angular/core';
import { MunicipiosService } from '../services/municipios.service';
import { FormControl } from '@angular/forms';
import { FileWriter } from '@angular/compiler-cli/ngcc/src/writing/file_writer';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
  providers: [MunicipiosService],
})
export class MunicipiosComponent implements OnInit {
  codigoComunidad: any;
  codigoProvincia: any;
  codigoMunicipio: any;
  comunidadesList: any = [];
  provinciasList: any = [];
  municipiosList: any = [];
  comudidadFormControl: FormControl = new FormControl();
  provinciaFormControl: FormControl = new FormControl();
  municipioFormControl: FormControl = new FormControl();
  comunidad: string = '';
  provincia: string = '';
  municipio: string = '';
  comunidades: any = [];
  provincias: any = [];
  municipios: any = [];
  array: any;
  fw: FileWriter | undefined;

  constructor(public municipiosApi: MunicipiosService) {}

  ngOnInit(): void {
    this.municipiosApi.getComunidadesAutonomas().subscribe((response) => {
      this.comunidadesList = response;
    });
  }

  getProvincias(event: any) {
    this.provincias = [];
    this.municipios = [];
    let obj = {};
    this.codigoComunidad = event.inst._wheelArray;
    return this.municipiosApi
      .getProvinciasByComunidad(this.codigoComunidad)
      .subscribe((response) => {
        this.provinciasList = response;
        for (let provincia of this.provinciasList.data) {
          console.log(provincia);
          this.municipiosApi
            .getMunicipiosByProvincia(provincia.CPRO)
            .subscribe((response) => {
              this.municipiosList = response;
              for (let municipio of this.municipiosList.data) {
                console.log(municipio);
                this.municipios.push({
                  value: municipio.CMUM,
                  text: municipio.DMUN50,
                });
              }
            });
        }
      });
  }

  getMunicipios(event: Event) {
    return this.municipiosApi
      .getMunicipiosByProvincia(this.provincia)
      .subscribe((response) => {
        this.municipiosList = response;
        this.municipio = this.municipiosList[0];
      });
  }

  selectionChanged(event: Event) {
    console.log(event);
  }
}
