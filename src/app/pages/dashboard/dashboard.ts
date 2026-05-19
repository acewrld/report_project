import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material-module';


interface Report {
  name: string;
  category: string;
  lastRun: string;
  date: string;
  status: 'success' | 'failed' | 'pending';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './dashboard.html',
})


export class Dashboard {
  opened = false;
  reports: Report[] = [
    {
      name: 'Loan Report',
      category: 'Loan',
      lastRun: 'John Doe',
      date: 'Sep 12, 2022',
      status: 'success',
    },
    {
      name: 'Finance Summary Report',
      category: 'Finance',
      lastRun: 'Admin User',
      date: 'Aug 12, 2022',
      status: 'success',
    },
    {
      name: 'Guarantor Summary Report',
      category: 'Loan',
      lastRun: 'John Doe',
      date: 'Aug 12, 2022',
      status: 'failed',
    },
    {
      name: 'Loan Report',
      category: 'Loan',
      lastRun: 'John Doe',
      date: 'Sep 12, 2022',
      status: 'success',
    },
    {
      name: 'Finance Summary Report',
      category: 'Finance',
      lastRun: 'Admin User',
      date: 'Aug 12, 2022',
      status: 'pending',
    },
    {
      name: 'Guarantor Summary Report',
      category: 'Loan',
      lastRun: 'John Doe',
      date: 'Aug 12, 2022',
      status: 'success',
    },
  ];

  datasource = this.reports;

  statusClasses: Record<string, string> = {
  success: 'text-green-600',
  failed: 'text-red-600',
  pending: 'text-yellow-600',
};

statusClass(status: string): string {
  return this.statusClasses[status] || 'text-gray-600';
}

searchText: string = '';
selectedCategory: string = '';
selectedSort: string = 'NameAsc';

 selectCategory(category: string) {
  this.selectedCategory = category;
  this.applyFilters();
}

  selectSort(sort: string) {
  this.selectedSort = sort;
  this.applyFilters();
}

  applyFilters() {

  let data = this.reports

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

    case 'NameDesc':
      data.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case 'Recent':
      data.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;

    case 'DateOldest':
      data.sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      break;
  }

  this.datasource = data;
}
}


