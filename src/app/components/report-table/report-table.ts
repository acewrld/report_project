import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { REPORTS, Report } from '../../api/reports';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-table',
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './report-table.html',
})
export class ReportTable {
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

  // goToRoute(element: Report) {
  //   this.router.navigate(['/report'], { queryParams: { name: element.name } });
  // }
}