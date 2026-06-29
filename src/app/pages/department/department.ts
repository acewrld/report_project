import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material-module';
import { REPORTS, Report } from '../../api/reports'
import { SearchBtn } from '../../components/search-btn/search-btn';
// import { ReportTable } from '../../components/report-table/report-table';
import { GlobalStateService } from '../../services/global-state';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule, RouterLink, SearchBtn],
  templateUrl: './department.html',
})
export class Department {

  constructor( public globalState: GlobalStateService) {}

  opened = false;
  searchText = '';
  selectedCategory = '';
  selectedSort = '';

  reports: Report[] = REPORTS;
  datasource = this.reports;

  statusClasses: Record<string, string> = {
    success: 'text-green-600',
    failed: 'text-red-600',
    pending: 'text-yellow-600',
  };

  statusClass(status: string): string {
    return this.statusClasses[status] || 'text-gray-600';
  }

onSearch(value: string) {
  this.searchText = value;
  this.applyFilters();
}

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  selectSort(sort: string) {
    this.selectedSort = sort;
    this.applyFilters();
  }

  applyFilters() {
  let data = [...this.reports];

  if (this.searchText?.trim()) {
    const search = this.searchText.toLowerCase();

    data = data.filter(r =>
      r.name.toLowerCase().includes(search) ||
      r.category.toLowerCase().includes(search) ||
      r.lastRun.toLowerCase().includes(search) ||
      r.date.toLowerCase().includes(search)
    );
  }

  if (this.selectedCategory && this.selectedCategory !== 'All Categories') {
    data = data.filter(r => r.category === this.selectedCategory);
  }

  switch (this.selectedSort) {
    case 'NameAsc':
      data.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case 'Recent':
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;

    case 'DateOldest':
      data.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      break;
  }
  this.datasource = data;
}
}