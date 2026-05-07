import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';


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
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatMenu,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatMenuTrigger,
    MatButtonModule,
    FontAwesomeModule,
    NgClass
  ],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  opened = false;
  faBars = faBars;
  faAngleDown = faAngleDown;
  faUser = faUser;

  reports: Report[] = [
    {
      name: 'Loan Report',
      category: 'Loan',
      lastRun: 'User, Admin',
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
      lastRun: 'User, Admin',
      date: 'Aug 12, 2022',
      status: 'failed',
    },
    {
      name: 'Loan Report',
      category: 'Loan',
      lastRun: 'User, Admin',
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
      lastRun: 'User, Admin',
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

  selectedCategory: string = '';
  selectedSort: string = '';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  selectSort(sort: string) {
    this.selectedSort = sort;
  }
}
