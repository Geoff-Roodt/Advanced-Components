import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineStyleComponent } from './inline-style/inline-style.component';
import { ExternalStyleComponent } from './external-style/external-style.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InlineStyleComponent,
    ExternalStyleComponent
  ]
})

export class StylingModule { }
