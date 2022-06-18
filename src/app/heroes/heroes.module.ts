import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes-list/heroes.component';
import { HeroDetailComponent } from './components/heroe-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule, FormsModule, MaterialModule, HeroesRoutingModule
  ]
})
export class HeroesModule { }
