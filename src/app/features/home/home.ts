import { Component, signal } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-home',
  imports: [SectionTitle],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly isAvailable = signal(true);
  protected readonly name = signal('Lokeshwari Vadlamudi');
  protected readonly role = signal('Frontend Developer');
  protected readonly description =
    signal('I build responsive web and cross-platform mobile applications using Angular, TypeScript and Ionic.');  
  protected readonly skills = [
    'Angular',
    'TypeScript',
    'Ionic',
    'RxJS',
    'HTML5',
    'CSS',
    'SCSS',
    'Bootstrap',
    'MongoDB',
    'Spring Boot'
  ];
    protected contactMe(): void {
   window.location.href = 'mailto:lokeshwarivadlamudi@gmail.com';
  }
  protected toggleAvailability(): void {
   this.isAvailable.update(value => !value);
}
}
