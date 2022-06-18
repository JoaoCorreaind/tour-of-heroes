import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { Hero } from '../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;
  constructor(
    private http: HttpClient,
    private messageService: MessagesService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`feched ${heroes.length} heroes`)));
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`fetched hero id ${id} and name ${hero.nome}`)));
  }

  private log(message: string): void {
    this.messageService.addMessage(`HeroService: $ ${message}`)
  }
}
