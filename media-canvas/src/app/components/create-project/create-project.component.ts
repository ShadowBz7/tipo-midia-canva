import { Component, OnInit }           from '@angular/core';
import { CommonModule }                from '@angular/common';
import { FormsModule, NgForm }         from '@angular/forms';
import { Router, ActivatedRoute }      from '@angular/router';
import { ProjectsService, Project }    from '../../services/projects.service';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent implements OnInit {
  form: Project = {
    name: '',
    type: 'Sheet',
    extension: '.xlsx',
    author: '',
    description: ''
  };

  /* tipo → extensões */
  typeMap: Record<string,string[]> = {
    Sheet:          ['.xlsx','.xls','.ods','.csv','.tsv'],
    Doc:            ['.docx','.doc','.odt','.rtf','.pdf'],
    Whiteboard:     ['.whiteboard','.rdw','.wbx','.svg','.png'],
    Presentation:   ['.pptx','.ppt','.odp','.key','.pdf'],
    'Social Media': ['.png','.mp4','.jpg','.gif','.html'],
    'Photo Editor': ['.psd','.xcf','.png','.jpg','.tiff'],
    Video:          ['.mp4','.mov','.avi','.mkv','.webm'],
    Print:          ['.pdf','.tiff','.eps','.ai','.indd'],
    Website:        ['.html','.css','.js','.php','.json'],
    'Custom Size':  ['.pdf','.svg','.ai','.psd','.png'],
    Upload:         []
  };
  types     = Object.keys(this.typeMap);
  extensions = this.typeMap[this.form.type];

  /* tipo → ícone */
  iconMap: Record<string,string> = {
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

  constructor(
    private svc: ProjectsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const preset = this.route.snapshot.queryParamMap.get('type');
    if (preset && this.types.includes(preset)) {
      this.form.type = preset;
      this.extensions = this.typeMap[preset];
      this.form.extension = this.extensions[0] || '';
    }
  }

  onTypeChange(e: Event) {
    const t = (e.target as HTMLSelectElement).value;
    this.form.type = t;
    this.extensions = this.typeMap[t];
    this.form.extension = this.extensions[0] || '';
  }

  onSubmit(f: NgForm) {
    if (f.invalid) return;
    this.svc.create(this.form).subscribe(() => {
      this.router.navigate(['/projects']);
    });
  }
}
