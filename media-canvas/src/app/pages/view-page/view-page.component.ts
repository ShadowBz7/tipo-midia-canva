import { Component }            from '@angular/core';
import { SidebarComponent }     from '../../components/sidebar/sidebar.component';
import { SearchComponent }      from '../../components/search/search.component';
import { TopbarComponent }      from '../../components/topbar/topbar.component';
import { ViewProjectComponent } from '../../components/view-project/view-project.component';
import { ButtonComponent }      from '../../components/button/button.component';

@Component({
  selector: 'app-view-page',
  standalone: true,
  imports: [
    SidebarComponent,
    SearchComponent,
    TopbarComponent,
    ViewProjectComponent,
    ButtonComponent
  ],
  templateUrl: './view-page.component.html',
})
export class ViewPageComponent {}
