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
  protected readonly role = signal('Frontend Developer | Angular & TypeScript');
  protected readonly description = signal(
    'Frontend developer with 5 years of experience building responsive web and cross-platform applications using Angular, TypeScript, Ionic and REST APIs.'
  );
  protected readonly skills = [
'Angular',
  'TypeScript',
  'JavaScript',
  'RxJS',
  'Ionic',
  'HTML5',
  'CSS3',
  'SCSS',
  'REST APIs',
  'Bootstrap',
  'Git',
  'GitHub',
  'Agile / Scrum'
  ];

  protected contactMe(): void {
    window.location.href = 'mailto:lokeshwarivadlamudi@gmail.com';
  }

  protected downloadCv(): void {
    const link = document.createElement('a');
    link.href = '/Lokeshwari-Vadlamudi-CV.pdf';
    link.download = 'Lokeshwari-Vadlamudi-CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
