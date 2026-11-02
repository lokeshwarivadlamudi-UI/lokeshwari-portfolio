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
    'Frontend developer with approximately 5 years of experience building responsive web and cross-platform applications using Angular, TypeScript, Ionic and REST APIs.'
  );
  protected readonly cvUrl = 'https://lokeshwarivadlamudi-ui.github.io/lokeshwari-portfolio/Lokeshwari-Vadlamudi-CV.pdf';
  protected readonly skills = [
    'Angular', 'TypeScript', 'JavaScript', 'RxJS', 'Ionic', 'HTML5', 'CSS3', 'SCSS',
    'REST APIs', 'Bootstrap', 'Git', 'GitHub', 'Agile / Scrum'
  ];
}
