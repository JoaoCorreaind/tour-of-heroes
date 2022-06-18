import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/heroe-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes-list/heroes.component';

const routes: Routes = [
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
