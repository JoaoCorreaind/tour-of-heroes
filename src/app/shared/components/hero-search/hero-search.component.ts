import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  @Input() label = '';
  heroes$!: Observable<Hero>;
  constructor() { }



}
