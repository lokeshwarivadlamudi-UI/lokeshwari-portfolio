import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Home } from "./features/home/home";
import { About } from "./features/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lokeshwari Vadlamudi');
}
