import { Injectable } from '@angular/core';
import { Hero } from '../models/heroe.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Atributos
  private heroes: Hero[];

  // Constructor
  constructor() {
    this.heroes = [
      {
        id: 1,
        name: 'Spiderman',
        alterEgo: 'Peter Parker',
        power: 80,
        active: true,
        imageUrl: 'img/avatars/spiderman.svg',
        universe: 'Marvel'
      },
      {
        id: 2,
        name: 'Batman',
        alterEgo: 'Bruce Wayne',
        power: 50,
        active: true,
        imageUrl: 'img/avatars/batman.svg',
        universe: 'DC'
      },
      {
        id: 3,
        name: 'Hulk',
        alterEgo: 'Bruce Banner',
        power: 150,
        active: true,
        imageUrl: 'img/avatars/hulk.svg',
        universe: 'Marvel'
      },
      {
        id: 4,
        name: 'Iron Man',
        alterEgo: 'Tony Stark',
        power: 90,
        active: false,
        imageUrl: 'img/avatars/ironman.svg',
        universe: 'Marvel'
      },
      {
        id: 5,
        name: 'Capitán América',
        alterEgo: 'Steve Rogers',
        power: 85,
        active: false,
        imageUrl: 'img/avatars/capitanamerica.svg',
        universe: 'Marvel'
      },
      {
        id: 6,
        name: 'Daredevil',
        alterEgo: 'Matt Murdock',
        power: 70,
        active: true,
        imageUrl: 'img/avatars/daredevil.svg',
        universe: 'Marvel'
      },
      {
        id: 7,
        name: 'Lobezno',
        alterEgo: 'Logan',
        power: 95,
        active: true,
        imageUrl: 'img/avatars/lobezno.svg',
        universe: 'Marvel'
      },
      {
        id: 8,
        name: 'Cíclope',
        alterEgo: 'Scott Summers',
        power: 75,
        active: true,
        imageUrl: 'img/avatars/ciclope.svg',
        universe: 'Marvel'
      },
      {
        id: 9,
        name: 'Mr. Fantástico',
        alterEgo: 'Reed Richards',
        power: 85,
        active: true,
        imageUrl: 'img/avatars/mrfantastico.svg',
        universe: 'Marvel'
      },
      {
        id: 10,
        name: 'Linterna Verde',
        alterEgo: 'Hal Jordan',
        power: 90,
        active: true,
        imageUrl: 'img/avatars/linternaverde.svg',
        universe: 'DC'
      },
      {
        id: 11,
        name: 'Flash',
        alterEgo: 'Barry Allen',
        power: 100,
        active: true,
        imageUrl: 'img/avatars/flash.svg',
        universe: 'DC'
      },
      {
        id: 12,
        name: 'Superman',
        alterEgo: 'Clark Kent',
        power: 150,
        active: true,
        imageUrl: 'img/avatars/superman.svg',
        universe: 'DC'
      },
      {
        id: 13,
        name: 'Green Arrow',
        alterEgo: 'Oliver Queen',
        power: 65,
        active: true,
        imageUrl: 'img/avatars/arrow.svg',
        universe: 'DC'
      },

      // Heroínas

      {
        id: 14,
        name: 'Wonder Woman',
        alterEgo: 'Diana Prince',
        power: 120,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 15,
        name: 'Viuda Negra',
        alterEgo: 'Natasha Romanoff',
        power: 70,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 16,
        name: 'Bruja Escarlata',
        alterEgo: 'Wanda Maximoff',
        power: 140,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 17,
        name: 'Capitana Marvel',
        alterEgo: 'Carol Danvers',
        power: 130,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 18,
        name: 'Tormenta',
        alterEgo: 'Ororo Munroe',
        power: 110,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },

      // Villanos

      {
        id: 19,
        name: 'Thanos',
        alterEgo: 'Thanos',
        power: 150,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 20,
        name: 'Loki',
        alterEgo: 'Loki Laufeyson',
        power: 110,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 21,
        name: 'Ultrón',
        alterEgo: 'Ultrón',
        power: 120,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 22,
        name: 'Duende Verde',
        alterEgo: 'Norman Osborn',
        power: 95,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 23,
        name: 'Doctor Muerte',
        alterEgo: 'Victor Von Doom',
        power: 130,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 24,
        name: 'Cráneo Rojo',
        alterEgo: 'Johann Schmidt',
        power: 85,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 25,
        name: 'Magneto',
        alterEgo: 'Erik Lehnsherr',
        power: 140,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 26,
        name: 'Venom',
        alterEgo: 'Eddie Brock',
        power: 120,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'Marvel'
      },
      {
        id: 27,
        name: 'Joker',
        alterEgo: 'Desconocido',
        power: 70,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 28,
        name: 'Harley Quinn',
        alterEgo: 'Harleen Quinzel',
        power: 65,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 29,
        name: 'Lex Luthor',
        alterEgo: 'Lex Luthor',
        power: 90,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 30,
        name: 'Darkseid',
        alterEgo: 'Darkseid',
        power: 150,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 31,
        name: 'Flash Reverso',
        alterEgo: 'Eobard Thawne',
        power: 120,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 32,
        name: 'Deathstroke',
        alterEgo: 'Slade Wilson',
        power: 95,
        active: true,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      },
      {
        id: 33,
        name: 'Bane',
        alterEgo: 'Bane',
        power: 110,
        active: false,
        imageUrl: 'img/avatars/defaultheroe.svg',
        universe: 'DC'
      }
    ];
  }

  // Métodos disponibles del servicio

  /**
   * Método que retorna la lista completa de Heroes
   */
  public getHeroes(): Hero[] {
    return this.heroes;
  }

  /**
   * Método que retorna un Hero según la id, o bien undefined si no existe.
   */
  public getHeroById(id: number): Hero | undefined {
    for (let hero of this.heroes) {
      if (hero.id === id) {
        return hero;
      }
    }
    return undefined;
  }

}
