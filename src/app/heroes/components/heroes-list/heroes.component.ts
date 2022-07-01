import { ConfirmationDialogComponent } from './../../../core/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/models/dialog.data';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.get().subscribe((res) => (this.heroes = res));
  }

  onSelected(hero: Hero): void {
    this.delete(hero);
  }

  delete(hero: Hero) {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete ${hero.name}`
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.heroService.delete(hero).subscribe(() => {
          //this.heroes = this.heroes.filter(h => h != hero);
          this.getHeroes();
        });
      }
    })
  }
}
