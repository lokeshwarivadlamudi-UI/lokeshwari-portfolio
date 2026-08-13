import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { ProjectCard } from '../../shared/project-card/project-card';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      title: 'Amagram',
      type: 'Cross-platform Application',
      company: 'Epitome Cloud Technology Pvt Ltd',
      description:
        'A cross-platform application developed for Android, iOS and Web using Angular and Ionic. Worked on responsive UI, reusable components and REST API integration.',
      technologies: [
        'Angular',
        'Ionic',
        'TypeScript',
        'REST APIs',
        'Spring Boot',
        'MongoDB'
      ],
      platform: ['Android', 'iOS', 'Web']
    },

    {
      title: 'Amagram Admin',
      type: 'Web Application',
      company: 'Epitome Cloud Technology Pvt Ltd',
      description:
        'An administrative web application developed using Angular for managing application-related functionality and data.',
      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Bootstrap'
      ],
      platform: ['Web']
    },

    {
      title: 'Reflogy',
      type: 'Mobile Application',
      company: 'Icrederity Info Services Pvt Ltd',
      description:
        'A referral and rewards Android application developed using Ionic, focused on user engagement and an intuitive mobile experience.',
      technologies: [
        'Ionic',
        'Angular',
        'TypeScript'
      ],
      platform: ['Android']
    },

    {
      title: 'Incident Reporter',
      type: 'Mobile Application',
      company: 'Cloud Paradigm Software Pvt Ltd',
      description:
        'An Android application for reporting incidents with authentication and image/video upload functionality using Firebase Realtime Database.',
      technologies: [
        'Android',
        'Java',
        'Firebase'
      ],
      platform: ['Android']
    }
  ];
}
