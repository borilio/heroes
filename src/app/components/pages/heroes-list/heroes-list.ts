import { Component } from '@angular/core';
import { Hero } from '../../../models/heroe.model';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'app-heroes-list',
  imports: [],
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList {
  public heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}
