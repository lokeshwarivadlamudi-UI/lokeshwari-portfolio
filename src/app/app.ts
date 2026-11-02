import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Footer } from './shared/footer/footer';
import { CvQrWidget } from './shared/cv-qr-widget/cv-qr-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home, About, Experience, Projects, Contact, Footer, CvQrWidget],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lokeshwari Vadlamudi');
}
