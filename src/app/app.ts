import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Home } from "./features/home/home";
import { About } from "./features/about/about";
import { Experience } from './features/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home, Home, About, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lokeshwari Vadlamudi');
}
