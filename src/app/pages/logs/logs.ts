import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../material/material-module';
import { FormsModule } from '@angular/forms';
import { GlobalStateService } from '../../services/global-state';



@Component({
  selector: 'app-logs',
  imports: [MaterialModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './logs.html',
})
export class Logs {
  constructor( public globalState: GlobalStateService) {}

  ngOnInit() {
    console.log(this.globalState.user);
  }
  opened = false;

  logs = [
    {
      dateandtime: '2022-09-12 14:30:00',
      action: 'Login',
      details: 'John Doe logged in from IP 192.168.1.1',
      user: 'John Doe',
      status: 'Success'
    },
    {
      dateandtime: '2022-09-12 14:33:00',
      user: 'John Doe',
      action: 'Ran Report',
      details: 'John Doe ran the Loan Report',
      status: 'Success'
    },
    {
      dateandtime: '2022-09-12 14:30:00',
      action: 'Export Report',
      details: 'John Doe exported the Loan Report',
      user: 'John Doe',
      status: 'Failed'
    },
    {
      dateandtime: '2022-09-12 16:30:00',
      action: 'Login',
      details: 'Admin logged in from IP 192.168.1.1',
      user: 'Admin',
      status: 'Success'
    },
    {
      dateandtime: '2022-09-12 16:33:00',
      action: 'Ran Report',
      details: 'Admin ran the Summary Report',
      user: 'Admin',
      status: 'Success'
    },
    {
      dateandtime: '2025-09-12 16:33:00',
      action: 'Export Report',
      details: 'Admin exported the Summary Report',
      user: 'Admin',
      status: 'Failed'
    },
    {
      dateandtime: '2022-09-12 16:33:00',
      action: 'Export Report',
      details: 'Admin exported the Summary Report',
      user: 'Admin',
      status: 'Pending'
    }
  ];

 datasource = this.logs;

  selectedAction: string = '';
  selectedStatus: string = '';
  selectedDate: string = '';
  searchText: string = '';

 selectDate(date: string) {
  this.selectedDate = date;
  this.applyFilters();
}

  selectAction(action: string) {
  this.selectedAction = action;
  this.applyFilters();
}

  selectStatus(status: string) {
    this.selectedStatus = status;
    this.applyFilters();
  }

applyFilters() {

  let data = this.logs;

  if (this.searchText?.trim()) {
    const search = this.searchText.toLowerCase();
    data = data.filter(log =>
      log.user.toLowerCase().includes(search) ||
      log.action.toLowerCase().includes(search) ||
      log.details.toLowerCase().includes(search) ||
      log.status.toLowerCase().includes(search) ||
      log.dateandtime.toLowerCase().includes(search)
    );
  }

  if (this.selectedDate) {
    data = data.filter(log =>
      log.dateandtime.split(' ')[0] === this.selectedDate
    );
  }

  if (this.selectedAction && this.selectedAction !== 'All Actions') {
    data = data.filter(log =>
      log.action === this.selectedAction
    );
  }

  if (this.selectedStatus && this.selectedStatus !== 'All Status') {
    data = data.filter(log =>
      log.status === this.selectedStatus
    );
  }

  this.datasource = data;
}

  statusClass(status: string): string {
    return status === 'Success'
      ? 'text-green-600 bg-green-100'
      : status === 'Failed'
      ? 'text-red-600 bg-red-100'
      : 'text-yellow-600 bg-yellow-100';
  }
}