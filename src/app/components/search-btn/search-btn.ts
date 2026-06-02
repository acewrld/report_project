import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-search-btn',
  imports: [MaterialModule, FormsModule, CommonModule, MatIconModule],
  templateUrl: './search-btn.html',
})
export class SearchBtn {
  searchText: string = '';

  @Output() searchChange = new EventEmitter<string>();

  applyFilters() {
    this.searchChange.emit(this.searchText);
  }
}
