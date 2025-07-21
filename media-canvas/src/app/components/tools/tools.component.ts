import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkWithHref
  ],
  templateUrl: './tools.component.html',
})
export class ToolsComponent {
  tools = [
    { icon: 'bi bi-table',             label: 'Sheet'        },
    { icon: 'bi bi-file-earmark-text', label: 'Doc'          },
    { icon: 'bi bi-pencil-square',     label: 'Whiteboard'   },
    { icon: 'bi bi-camera-video',      label: 'Presentation' },
    { icon: 'bi bi-heart',             label: 'Social Media' },
    { icon: 'bi bi-camera',            label: 'Photo Editor' },
    { icon: 'bi bi-play-btn',          label: 'Video'        },
    { icon: 'bi bi-printer',           label: 'Print'        },
    { icon: 'bi bi-browser-safari',    label: 'Website'      },
    { icon: 'bi bi-aspect-ratio',      label: 'Custom Size'  },
    { icon: 'bi bi-cloud-arrow-up',    label: 'Upload'       },
    { icon: 'bi bi-three-dots',        label: 'More'         },
  ];
}
