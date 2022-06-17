import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';
import { Hero } from './hero.model';
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
    this.messageService.addMessage('HeroService: fetched heroes')
    return heroes;
  }
}