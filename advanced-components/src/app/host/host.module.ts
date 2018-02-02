import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupDirective } from './popup-demo/popup.directive';
import {PopupComponent} from './popup-demo/popup.component';
import {ProfileCardComponent} from './popup-demo/profile-card.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupDirective,
    PopupComponent,
    ProfileCardComponent
  ],
  exports: [
  ]
})

export class HostModule { }
