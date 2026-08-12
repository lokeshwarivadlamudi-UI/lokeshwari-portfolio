import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { ExperienceCard } from '../../shared/experience-card/experience-card';
import { ExperienceItem } from '../../core/models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  protected readonly experiences: ExperienceItem[] = [
 {
    role: 'Software Developer',
    company: 'Epitome Cloud Technology Pvt Ltd',
    duration: 'Jan 2024 – Dec 2024',
    type: 'Contract',
    description:
      'Developed the Amagram cross-platform application and Amagram Admin web application using Angular, Ionic, TypeScript and REST APIs. Worked on reusable UI components, backend integration and application features for Android, iOS and Web.',
    technologies: [
      'Angular',
      'TypeScript',
      'Ionic',
      'REST APIs',
      'Spring Boot',
      'MongoDB'
    ]
  },
  {
    role: 'Software Developer',
    company: 'JINSoftz Technology Private Limited',
    duration: 'Mar 2020 – May 2022',
    type: 'Full Time',
    description:
      'Developed responsive Angular web applications for business and e-commerce clients, including AALILAI, EEEZE, OHAV USA and JinzCart. Worked directly with clients to understand requirements and deliver frontend solutions.',
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Icrederity Info Services Pvt Ltd',
    duration: 'Jun 2019 – Nov 2019',
    type: 'Freelance',
    description:
      'Developed the Reflogy referral and rewards Android application using Ionic. Focused on intuitive user interfaces, user engagement and application performance.',
    technologies: [
      'Ionic',
      'Angular',
      'TypeScript',
      'Android'
    ]
  },
  {
    role: 'Android Developer Intern',
    company: 'Cloud Paradigm Software Pvt Ltd',
    duration: 'Jan 2018 – Apr 2018',
    type: 'Internship',
    description:
      'Developed the Incident Reporter Android application using Android Studio and Firebase Realtime Database, including authentication and image/video upload functionality.',
    technologies: [
      'Android',
      'Firebase',
      'Java'
    ]
  }  ];

}
