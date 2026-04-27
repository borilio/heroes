import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/layout/header/header";
import { Navbar } from "./components/layout/navbar/navbar";
import { Home } from "./components/pages/home/home";
import { Footer } from "./components/layout/footer/footer";
import { HeroesList } from "./components/pages/heroes-list/heroes-list";
import { HeroesManage } from "./components/pages/heroes-manage/heroes-manage";
import { About } from "./components/pages/about/about";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Home,
    Footer,
    HeroesList,
    HeroesManage,
    About
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
