import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes-list/heroes.component';
import { HeroDetailComponent } from './components/heroe-detail/hero-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule, HeroesRoutingModule, FlexLayoutModule, SharedModule
  ]
})
export class HeroesModule { }
