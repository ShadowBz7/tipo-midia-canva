import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule, NgForm }    from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-project.component.html',
})
export class ViewProjectComponent implements OnInit {
  form: Project = {
    id: 0,
    name: '',
    type: 'Sheet',
    extension: '',
    author: '',
    description: ''
  };

  // Mapa tipo → extensões
  typeMap: Record<string, string[]> = {
    Sheet:            ['.xlsx','.xls','.ods','.csv','.tsv'],
    Doc:              ['.docx','.doc','.odt','.rtf','.pdf'],
    Whiteboard:       ['.whiteboard','.rdw','.wbx','.svg','.png'],
    Presentation:     ['.pptx','.ppt','.odp','.key','.pdf'],
    'Social Media':   ['.png','.mp4','.jpg','.gif','.html'],
    'Photo Editor':   ['.psd','.xcf','.png','.jpg','.tiff'],
    Video:            ['.mp4','.mov','.avi','.mkv','.webm'],
    Print:            ['.pdf','.tiff','.eps','.ai','.indd'],
    Website:          ['.html','.css','.js','.php','.json'],
    'Custom Size':    ['.pdf','.svg','.ai','.psd','.png'],
    Upload:           []
  };
  types = Object.keys(this.typeMap);
  extensions: string[] = [];

  // ícones por tipo
  iconMap: Record<string,string> = {
    Sheet:          'bi bi-table',
    Doc:            'bi bi-file-earmark-text',
    Whiteboard:     'bi bi-pencil-square',
    Presentation:   'bi bi-camera-video',
    'Social Media': 'bi bi-heart',
    'Photo Editor': 'bi bi-camera',
    Video:          'bi bi-play-btn',
    Print:          'bi bi-printer',
    Website:        'bi bi-browser-safari',
    'Custom Size':  'bi bi-aspect-ratio',
    Upload:         'bi bi-cloud-arrow-up'
  };

  constructor(
    private route: ActivatedRoute,
    private svc: ProjectsService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.get(id).subscribe(p => {
      this.form = { ...p };
      this.extensions = this.typeMap[p.type] || [];
    });
  }

  onTypeChange(e: Event) {
    const t = (e.target as HTMLSelectElement).value;
    this.form.type = t;
    this.extensions = this.typeMap[t];
    this.form.extension = this.extensions[0] || '';
  }

  onSubmit(f: NgForm) {
    if (f.invalid) return;
    this.svc.update(this.form).subscribe(() => {
      this.router.navigate(['/projects']);
    });
  }

  onDelete() {
    if (!confirm('Delete this project?')) return;
    this.svc.delete(this.form.id!).subscribe(() => {
      this.router.navigate(['/projects']);
    });
  }
}
