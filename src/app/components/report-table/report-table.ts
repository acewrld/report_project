import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../material/material-module';
import { REPORTS, Report } from '../../api/reports';

@Component({
  selector: 'app-report-table',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './report-table.html',
})
export class ReportTable {
  searchText = '';
  selectedCategory = '';
  selectedSort = '';

  allReports: Report[] = REPORTS;
  datasource = this.allReports

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
  let data = [...this.datasource];

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