import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupDirective } from './popup-demo/popup.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupDirective
  ],
  exports: [
  ]
})

export class HostModule { }
