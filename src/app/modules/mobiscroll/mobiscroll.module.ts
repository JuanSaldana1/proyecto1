import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MbscCalendarModule,
  MbscDatetimeModule,
  MbscModule,
} from "@mobiscroll/angular";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MbscModule,
    MbscCalendarModule,
    MbscDatetimeModule,
  ],
  exports: [
    MbscModule,
    MbscCalendarModule,
    MbscDatetimeModule,
  ]
})
export class MobiscrollModule {
}
