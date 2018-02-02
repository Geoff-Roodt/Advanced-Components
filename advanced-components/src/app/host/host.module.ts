import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupDirective } from './popup-demo/popup.directive';
import {PopupComponent} from './popup-demo/popup.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupDirective,
    PopupComponent
  ],
  exports: [
  ]
})

export class HostModule { }
