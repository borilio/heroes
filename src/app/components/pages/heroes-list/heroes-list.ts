import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/heroe.model';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'app-heroes-list',
  imports: [],
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    console.log("👷Heroes-List | constructor iniciado");
  }

  ngOnInit(): void {
    console.log('🟢 Heroes-List | ngOnInit iniciado');
    console.log('📡 Llamamos al servicio y hacemos subscribe...');
    console.log('⏳ Quedamos a la espera de la respuesta...');

    this.heroService.getHeroes().subscribe((datos: Hero[]) => {
      console.log('📥 Respuesta recibida del servidor');
      console.log('📦 Datos recibidos (datos):', datos);

      this.heroes = datos;

      console.log('💾 Datos guardados en this.heroes');
      console.log('🦸 Lista final de héroes:', this.heroes);
      console.log('✅ Proceso completado');
    });

    console.log('🔴 Heroes-List | ngOnInit terminado');
  }
}
