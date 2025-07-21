import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sort.component.html',
})
export class SortComponent {
  options = ['Ultima Modificação', 'Nome', 'Data de criação'];
  selected = this.options[0];

  @Output() sortChange = new EventEmitter<string>();

  select(option: string) {
    this.selected = option;
    this.sortChange.emit(option);
  }
}
