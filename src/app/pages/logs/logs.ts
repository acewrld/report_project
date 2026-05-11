import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-logs',
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    RouterLink
  ],
  templateUrl: './logs.html',
})
export class Logs {
  opened = false;

  logs = [
    {
      dateandtime: '2022-09-12 14:30:00',
      action: 'User Login',
      details: 'John Doe logged in from IP 192.168.1.1',
      user: 'John Doe',
      status: 'success'
    },
    {
      dateandtime: '2022-09-12 14:33:00',
      action: 'Ran Report',
      details: 'John Doe ran the Loan Report',
      user: 'John Doe',
      status: 'success'
    },
    {
      dateandtime: '2022-09-12 14:30:00',
      action: 'Export Report',
      details: 'John Doe exported the Loan Report',
      user: 'John Doe',
      status: 'failed'
    },
    {
      dateandtime: '2022-09-12 16:30:00',
      action: 'Admin Login',
      details: 'Admin logged in from IP 192.168.1.1',
      user: 'Admin',
      status: 'success'
    },
    {
      dateandtime: '2022-09-12 16:33:00',
      action: 'Ran Report',
      details: 'Admin ran the Summary Report',
      user: 'Admin',
      status: 'success'
    },
    {
      dateandtime: '2022-09-12 16:33:00',
      action: 'Export Report',
      details: 'Admin exported the Summary Report',
      user: 'Admin',
      status: 'failed'
    },
  ];

  datasource = this.logs;

  statusClass(status: string): string {
    return (
      status === 'success'
        ? 'text-green-600 bg-green-100'
        : status === 'failed'
        ? 'text-red-600 bg-red-100'
        : 'text-yellow-600 bg-yellow-100'
    );
  }

  selectedAction: string = '';
  selectedStatus: string = '';

  selectAction(action: string) {
    this.selectedAction = action;
  }

  selectStatus(status: string) {
    this.selectedStatus = status;
  }

}
