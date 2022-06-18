import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { Hero } from '../models/hero.model';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessagesService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHeroById(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => (hero.id == id))!
    this.messageService.addMessage(`HeroService: fetched hero id ${id}`)
    return of(hero);
  }
}
