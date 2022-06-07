/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MunicipiosService } from '../services/municipios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  miFormulario = new FormGroup({
    username: new FormControl('Nancy', Validators.minLength(2)),
  });
  myControl = new FormControl();
  username: FormControl | undefined;
  selected: Date = new Date();
  options: any = [];
  genderData = [
    { text: 'Male', value: 'M' },
    { text: 'Female', value: 'F' },
  ];
  genderOptions: any;
  gender: any;

  constructor(private municipiosService: MunicipiosService) {}

  ngOnInit(): void {}
}
