import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { FlexLayoutModule } from '@angular/flex-layout';


const COMPONENTS = [HeroSearchComponent]
@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    MaterialModule, CommonModule, FlexLayoutModule
  ],
  exports: [
    COMPONENTS,
  ]
})
export class SharedModule { }
