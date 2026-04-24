import { Component } from '@angular/core';
import { Boton } from "../boton/boton";

@Component({
  selector: 'app-ficha-heroe',
  imports: [Boton],
  templateUrl: './ficha-heroe.html',
  styleUrl: './ficha-heroe.css',
})
export class FichaHeroe {
  nombre: string = 'Spider-Man';
  nivelPoder: number = 85;
  activo: boolean = true;
}
