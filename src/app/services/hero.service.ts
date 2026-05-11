import { Injectable } from '@angular/core';
import { Hero } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Atributos
  public apiURL = "http://localhost:3000"; // Local
  // public apiURL = "https://my-json-server.typicode.com/borilio/heroes-backend"; // Remoto con my-json-server

  // Constructor
  constructor(private http: HttpClient){}

  // Métodos disponibles del servicio

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiURL}/heroes`);
  }
  
  public getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiURL}/heroes/${id}`);
  }

  public deleteHero(id: number)  {
    return this.http.delete(`${this.apiURL}/heroes/${id}`);
  }

  public createHero(hero : Hero) {
    return this.http.post(`${this.apiURL}/heroes`, hero);
  }
  
  public patchHero(id: number, cambios: Partial<Hero>) {
    return this.http.patch(`${this.apiURL}/heroes/${id}`, cambios);
  }

}
