import { Component } from '@angular/core';
import { FichaHeroe } from "../ficha-heroe/ficha-heroe";

@Component({
  selector: 'app-listado',
  imports: [FichaHeroe],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {}
