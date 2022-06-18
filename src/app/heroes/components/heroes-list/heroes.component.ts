import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome'];
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((res) => (this.heroes = res));
  }
}
