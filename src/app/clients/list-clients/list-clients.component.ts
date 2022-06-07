/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent implements OnInit {
  response: any;
  clientList: any[] = [];

  constructor(private clientService: ClientesService) {}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((response) => {
      this.clientList = response;
    });
  }
}
