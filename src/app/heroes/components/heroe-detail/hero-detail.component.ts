import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId != 'new') {
      this.isEditing = true;

      const id = Number(paramId);
      this.heroService.getById(Number(id)).subscribe((hero) => {
        this.hero = hero;
        this.form.controls['id'].setValue(hero.id);
        this.form.controls['name'].setValue(hero.name);
      });
    }
    this.form.controls.id.disable();
  }

  goBack() {
    this.location.back();
  }

  create(): void {
    const { valid, value } = this.form;
    console.log(this.form)
    if (valid) {
      const hero: Hero = {
        name: value.name!,
      } as Hero;
      this.heroService.create(hero).subscribe(() => this.goBack());
    } else {
      this.showErrorMsg();
    }
  }

  update(): void {

    const { valid, value } = this.form;
    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name!,
      }
      this.heroService.update(hero).subscribe(() => this.goBack());
    } else {
      this.showErrorMsg();
    }
  }

  private showErrorMsg(): void {
    this.snackBar.open('Please check the erros found.', 'Ok', {
      duration: 5000,
      verticalPosition: 'top'
    })
  }
}
