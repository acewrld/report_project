import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../../material/material-module';
import { SearchBtn } from '../../components/search-btn/search-btn';

import { ReportInterface } from '../../interface/report';
import { ReportService } from '../../services/reports';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MaterialModule,
    SearchBtn,
  ],
  templateUrl: './department.html',
})
export class Department implements OnInit {
  g_user = '';

  allReports = signal<ReportInterface[]>([]);

  searchText = signal('');
  selectedCategory = signal('All Categories');
  selectedSort = signal('All');

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.g_user = this.reportService.globalState.user;
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReport().subscribe({
      next: (data) => {
        this.allReports.set(data);
      },
      error: (err) => {
        console.error('Failed to load reports', err);
      },
    });
  }

  filteredReports = computed(() => {
    let data = [...this.allReports()];

    const search = this.searchText().trim().toLowerCase();

    if (search) {
      data = data.filter(
        (report) =>
          report.name.toLowerCase().includes(search) ||
          report.category.toLowerCase().includes(search) ||
          report.user.toLowerCase().includes(search) ||
          report.date.toLowerCase().includes(search)
      );
    }

    if (
      this.selectedCategory() &&
      this.selectedCategory() !== 'All Categories'
    ) {
      data = data.filter(
        (report) => report.category === this.selectedCategory()
      );
    }

    switch (this.selectedSort()) {
      case 'NameAsc':
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'Recent':
        data.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;

      case 'DateOldest':
        data.sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
    }

    return data;
  });

  onSearch(value: string): void {
    this.searchText.set(value);
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  selectSort(sort: string): void {
    this.selectedSort.set(sort);
  }
}