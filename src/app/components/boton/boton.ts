import { Component } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.html',
  styleUrl: './boton.css',
})
export class Boton {
  cargando: boolean = false;

  hacerClick(): void {
    this.cargando = !this.cargando;
  }
}
