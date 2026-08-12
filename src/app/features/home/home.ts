import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
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
    'Spting Boot'
  ];
    protected contactMe(): void {
   window.location.href = 'mailto:lokeshwarivadlamudi@gmail.com';
  }
  protected toggleAvailability(): void {
   this.isAvailable.update(value => !value);
}
}
