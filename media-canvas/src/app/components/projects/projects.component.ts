// src/app/components/projects/projects.component.ts
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit, OnChanges {
  /** Recebe exatamente os valores do SortComponent */
  @Input() sortField: string = 'Ultima Modificação';

  projects: Project[] = [];

  iconMap: Record<string, string> = {
    Sheet:           'bi bi-table',
    Doc:             'bi bi-file-earmark-text',
    Whiteboard:      'bi bi-pencil-square',
    Presentation:    'bi bi-camera-video',
    'Social Media':  'bi bi-heart',
    'Photo Editor':  'bi bi-camera',
    Video:           'bi bi-play-btn',
    Print:           'bi bi-printer',
    Website:         'bi bi-browser-safari',
    'Custom Size':   'bi bi-aspect-ratio',
    Upload:          'bi bi-cloud-arrow-up',
    More:            'bi bi-three-dots'
  };

  constructor(private svc: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sortField'] && !changes['sortField'].firstChange) {
      this.sortProjects();
    }
  }

  private loadProjects() {
    this.svc.getAll().subscribe(data => {
      this.projects = data;
      this.sortProjects();
    });
  }

  private sortProjects() {
    const safeTime = (d?: string|Date) => new Date(d ?? 0).getTime();

    switch (this.sortField) {
      case 'Nome': 
        this.projects.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'Data de criação': 
        this.projects.sort((a, b) =>
          safeTime(b.created_at) - safeTime(a.created_at)
        );
        break;

      case 'Ultima Modificação':
      default:
        this.projects.sort((a, b) =>
          safeTime(b.updated_at) - safeTime(a.updated_at)
        );
        break;
    }
  }
}
