import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageSerivice: MessagesService,
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((res) => (this.heroes = res));
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageSerivice.addMessage(`HeroComponent : Selected Hero Id = ${hero.id}`);
  }
}
