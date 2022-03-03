import {Component, OnInit} from '@angular/core';
import {Municipio} from "../models/municipio";
import {MunicipiosService} from "../services/municipios.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
  providers: [MunicipiosService]
})
export class MunicipiosComponent implements OnInit {
  comunidadesList: any = [];
  provinciasList: any = [];
  municipiosList: any = [];
  comudidadFormControl: FormControl = new FormControl();
  provinciaFormControl: FormControl = new FormControl();
  municipioFormControl: FormControl = new FormControl();

  comunidad = this.comudidadFormControl.value;
  municipio: Municipio = {
    CMUM: '',
    CPRO: '',
    CUN: '',
    DMUN50: ''
  }

  constructor(
    public municipiosApi: MunicipiosService,
  ) {
  }

  ngOnInit(): void {
    this.municipiosApi.getComunidadesAutonomas().subscribe(response => {
      this.comunidadesList = response;
    });
  }

  getProvincias() {
    return this.municipiosApi.getProvinciasByComunidad(this.comudidadFormControl.value).subscribe(response => {
      this.provinciasList = response;
    });
  }

  selectionChanged(event: Event) {
    console.log(event);
  }
}
