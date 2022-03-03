import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MunicipiosService} from "../services/municipios.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  myControl = new FormControl();
  selected: Date = new Date();
  options: any = [];
  genderData = [{text: 'Male', value: 'M'}, {text: 'Female', value: 'F'}];
  genderOptions: any;
  gender: any;

  constructor(
    private municipiosService: MunicipiosService
  ) {
  }

  ngOnInit(): void {

  }

  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required)
  });
}
