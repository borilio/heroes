import { Injectable } from '@angular/core';
import { Hero } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Atributos
  public apiURL = "http://localhost:3000"; // Local
  // public apiURL = "https://my-json-server.typicode.com/borilio/heroes-backend"; // Remoto con my-json-server

  // Constructor
  constructor(private http: HttpClient){
  }

  // Métodos disponibles del servicio

  /**
   * Método que retorna la lista completa de Heroes
   */
  public getHeroes() {
    return this.http.get<Hero[]>(`${this.apiURL}/heroes`);
  }
  
  /**
   * Método que retorna un Hero según la id, o bien undefined si no existe.
   */
  public getHeroById(id: number) {
    return this.http.get<Hero>(`${this.apiURL}/heroes/${id}`);
  }

}
