import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../services/clientes.service";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  response: any;
  clientList: any = [];

  constructor(
    private clientService: ClientesService,
  ) {
  }

  ngOnInit(): void {
    this.clientList = this.clientService.getAllClients().subscribe(response => {
      this.response = response;
    });
    console.log(this.clientList);
  }

}
