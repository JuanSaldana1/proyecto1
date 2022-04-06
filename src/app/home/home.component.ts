import {Component, OnInit} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {Modal1Component} from "./modal1/modal1.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MdbModalService],
})
export class HomeComponent implements OnInit {
  modalRef: MdbModalRef<HomeComponent> | null = null;

  constructor(
    private modalService: MdbModalService
  ) {
  }

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.open(Modal1Component);
  }
}
