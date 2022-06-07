import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss'],
  providers: [MdbModalRef],
})
export class Modal1Component implements OnInit {
  constructor(public modalRef: MdbModalRef<Modal1Component>) {}

  ngOnInit(): void {}
}
