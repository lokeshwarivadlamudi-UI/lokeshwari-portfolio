import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../core/models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  readonly experience = input.required<ExperienceItem>();
}
