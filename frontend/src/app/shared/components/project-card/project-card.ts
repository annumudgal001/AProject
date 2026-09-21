import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {

  project = input.required<Project>();

}