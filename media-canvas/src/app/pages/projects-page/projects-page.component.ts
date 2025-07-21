import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';
import { SortComponent }   from '../../components/sort/sort.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SidebarComponent }  from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    SearchComponent,
    SortComponent,
    ProjectsComponent
  ],
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent {
  sortField: string = 'Ultima Modificação';

  onSortChange(field: string) {
    this.sortField = field;
  }
}
