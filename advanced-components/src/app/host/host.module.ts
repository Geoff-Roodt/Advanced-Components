import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupDirective } from './popup-demo/popup.directive';
import {PopupComponent} from './popup-demo/popup.component';
import {ProfileCardComponent} from './popup-demo/profile-card.component';

/*
  NEEDED FOR STEPS DEMO ONLY
*/

import { PopupDemoComponent1Module } from './popup-demo/steps/host-1';
import { PopupDemoComponent2Module } from './popup-demo/steps/host-2';
import { PopupDemoComponent3Module } from './popup-demo/steps/host-3';
import { PopupDemoComponent4Module } from './popup-demo/steps/host-4';

import { PopupDemoComponent1 } from './popup-demo/steps/host-1';
import { PopupDemoComponent2 } from './popup-demo/steps/host-2';
import { PopupDemoComponent3 } from './popup-demo/steps/host-3';
import { PopupDemoComponent4 } from './popup-demo/steps/host-4';

@NgModule({
  imports: [
    CommonModule,

    PopupDemoComponent1Module,
    PopupDemoComponent2Module,
    PopupDemoComponent3Module,
    PopupDemoComponent4Module
  ],
  declarations: [
    PopupDirective,
    PopupComponent,
    ProfileCardComponent
  ],
  exports: [
    PopupComponent,
    PopupDemoComponent1,
    PopupDemoComponent2,
    PopupDemoComponent3,
    PopupDemoComponent4
  ]
})

export class HostModule { }
