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

  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap((hero) => this.log(`fetched hero id ${hero.id} and name ${hero.name}`)));;
  }
  get(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`feched ${heroes.length} heroes`)));
  }

  getById(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`fetched hero id ${id} and name ${hero.name}`)));
  }

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(tap((hero) => this.log(`updated hero id ${hero.id} and name ${hero.name}`)));
  }

  private log(message: string): void {
    this.messageService.addMessage(`HeroService: $ ${message}`)
  }
}
