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
    console.log('👷Heroes-List | constructor iniciado');
  }

  ngOnInit(): void {
    console.log('🟢 Heroes-List | ngOnInit iniciado');
    this.loadHeroes();
    console.log('🔴 Heroes-List | ngOnInit terminado');
  }

  loadHeroes(): void {
    console.log('📡 Llamamos al servicio y hacemos subscribe...');
    console.log('⏳ Quedamos a la espera de la respuesta...');

    this.heroService.getHeroes().subscribe((datos: Hero[]) => {
      console.log('📥 Respuesta recibida del servidor');
      console.log('📦 Datos recibidos (datos):', datos);

      this.heroes = datos;

      console.log('💾 Datos guardados en this.heroes');
      console.log('✅ Proceso completado');
    });
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id).subscribe(() => {
      console.log('✅ Héroe eliminado correctamente');
      this.loadHeroes();
    });
  }

  createHero(): void {
    // 1. Creamos el recurso que vamos a enviar al backend para guardar...
    const milis = Date.now(); // Es la fecha actual en milis, para usarla como identificador
    const powerAleatorio = Math.floor(Math.random() * 100);
    const nuevoHeroe: Hero = {
      name: `Héroe nº ${milis}`,
      alterEgo: `Nombre de ${milis}`,
      active: true,
      power: powerAleatorio,
      universe: 'Multiverso',
      imageUrl: ''
    };

    // 2. Lo mandamos al backend por post
    this.heroService.createHero(nuevoHeroe).subscribe(() => {
      console.log('✅ Héroe creado correctamente', nuevoHeroe);
      this.loadHeroes();
    });
  }

  toggleActive(hero: Hero): void {
    
    // 1. Creamos el trozo de objeto solo con los atributos que vamos a parchear
    const nuevosValores: Partial<Hero> = {
      active: !hero.active
    };

    //  2. Enviamos por PATCH el trozo del objeto que queremos modificar parcialmente
    this.heroService.patchHero(hero.id!, nuevosValores).subscribe(()=>{
      console.log("✅ Atributos modificados", nuevosValores);
      this.loadHeroes();
    });

  }
}
