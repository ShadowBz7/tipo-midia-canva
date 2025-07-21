import { Component }                 from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RouterLink }                from '@angular/router';
import { SidebarComponent }          from '../../components/sidebar/sidebar.component';
import { TopbarComponent }           from '../../components/topbar/topbar.component';
import { CreateProjectComponent }    from '../../components/create-project/create-project.component';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SidebarComponent,
    TopbarComponent,
    CreateProjectComponent
  ],
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent {}
