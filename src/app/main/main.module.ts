import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { MdGridListModule, MdButtonModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MdGridListModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
