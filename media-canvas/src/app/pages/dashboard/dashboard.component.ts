import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchComponent }  from '../../components/search/search.component';
import { ToolsComponent }   from '../../components/tools/tools.component';
import { ProjectsComponent }from '../../components/projects/projects.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    SearchComponent,
    ToolsComponent,
    ProjectsComponent
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
