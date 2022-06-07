import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    MessagesModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    MessagesModule,
  ],
})
export class PrimengModule {}
