import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/heroe-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes-list/heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: ':id', component: HeroDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
