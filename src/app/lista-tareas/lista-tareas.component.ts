import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';
import {
  MbscCalendarOptions,
  MbscEventcalendarOptions,
  mobiscroll,
} from '@mobiscroll/angular';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent implements OnInit {
  events: any;
  mobile: Date | undefined;
  desktop: Date | undefined;
  miLista: string = 'Lista de actividades domésticas';
  birthday: Date | undefined;
  listaTareas: string[] = [];
  entrada: Tarea = new Tarea(3, 'Mi titulo', 'Mi resumen');
  genderData = [
    { text: 'Male', value: 'M' },
    { text: 'Female', value: 'F' },
  ];
  texto: string = '';
  estiloActual: any = '';
  today: number = Date.now();
  eventSettings: MbscEventcalendarOptions = {
    lang: 'es',
    theme: 'material',
    themeVariant: 'light',
    display: 'inline',
    calendarHeight: 610,
    view: {
      calendar: {
        labels: true,
      },
    },
    onEventSelect: (event, inst) => {
      mobiscroll.toast({
        message: event.event.text,
      });
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.listaTareas = [
      'Hacer la compra',
      'Regar las plantas',
      'Hacer la comida',
    ];
    this.estiloActual = {
      color: this.entrada.id % 2 == 0 ? 'blue' : 'white',
    };
  }

  addTarea() {
    let l: string = this.texto;
    if (l.length === 0 || l.toString() == '') {
      return false;
    } else {
      this.listaTareas.push(l);
      this.texto = '';
    }
    return l;
  }

  deleteTarea(text: String) {
    for (let i = 0; i < this.listaTareas.length; i++) {
      const el = this.listaTareas[i];
      if (el == text) {
        this.listaTareas.splice(i, 1);
      }
    }
  }

  public tipoDeClase(): any {
    return {
      oscuro: this.entrada.id % 2 == 0,
      claro: this.entrada.id % 2 != 0,
    };
  }

  mobileSettings: MbscCalendarOptions = {
    display: 'bubble',
  };

  desktopSettings: MbscCalendarOptions = {
    display: 'bubble',
    touchUi: false,
  };
}
