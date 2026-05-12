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
  
  // Para controlar los tiempos de carga en las peticiones
  public cargandoHeroes: boolean = false;
  public cargandoId: number = 0; // Guardamos la ID del héroe para solo mostrar el spinner en ESE elemento, no en todos.
  public cargandoEliminar: boolean = false;
  public cargandoNuevo: boolean = false;
  public cargandoToggle: boolean = false;
  public cargandoEditar: boolean = false;

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
    this.cargandoHeroes = true;

    this.heroService.getHeroes().subscribe((datos: Hero[]) => {
      console.log('📥 Respuesta recibida del servidor');
      console.log('📦 Datos recibidos (datos):', datos);

      this.heroes = datos;
      this.cargandoHeroes = false;

      console.log('💾 Datos guardados en this.heroes');
      console.log('✅ Proceso completado');
    });
  }

  deleteHero(id: number): void {
    this.cargandoEliminar = true;
    this.cargandoId = id;
    this.heroService.deleteHero(id).subscribe(() => {
      console.log('✅ Héroe eliminado correctamente');
      this.cargandoEliminar = false;
      this.cargandoId = 0;
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
    this.cargandoNuevo = true;
    this.heroService.createHero(nuevoHeroe).subscribe(() => {
      console.log('✅ Héroe creado correctamente', nuevoHeroe);
      this.cargandoNuevo = false;
      this.loadHeroes();
    });
  }

  toggleActive(hero: Hero): void {
    
    // 1. Creamos el trozo de objeto solo con los atributos que vamos a parchear
    const nuevosValores: Partial<Hero> = {
      active: !hero.active
    };
    this.cargandoToggle = true;
    this.cargandoId = hero.id!;

    //  2. Enviamos por PATCH el trozo del objeto que queremos modificar parcialmente
    this.heroService.patchHero(hero.id!, nuevosValores).subscribe(()=>{
      console.log("🩹 Atributos modificados correctamente:", nuevosValores);
      this.loadHeroes();
      this.cargandoToggle = false;
      this.cargandoId = 0;
    });

  }

  updateHero(hero: Hero): void {
    
    // 1. Mismo objeto, pero le cambiamos algunas propiedades
    const heroeActualizado: Hero = {
      ...hero,
      name: hero.name + " ⚡",
      power: hero.power + 30, 
      universe: hero.universe + " Ultimate"
    };
    this.cargandoEditar = true;
    this.cargandoId = hero.id!;

    // 2. Hacemos la petición PUT para sobrescribir el MISMO recurso con estos nuevos valores
    this.heroService.updateHero(heroeActualizado).subscribe(()=>{
      console.log("✏️ Héroe actualizado correctamente: ", hero);
      this.cargandoEditar = false;
      this.cargandoId = 0;
      this.loadHeroes();
    });

  }
}
