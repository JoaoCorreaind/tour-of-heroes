import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroService } from './../../../core/services/hero.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  @Output() private selected = new EventEmitter<Hero>();
  @Input() label = '';
  heroes$!: Observable<Hero[]>;

  private searchTerm = new Subject<string>();
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(term => this.heroService.search(term))
    );
  }

  search(term: string) {
    console.log(term)
    this.searchTerm.next(term);
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent) {
    const hero: Hero = selectedItem.option.value;
    this.searchTerm.next('');
    this.selected.emit(hero);
  }
}
