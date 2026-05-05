import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBar } from '../../components/side-bar/side-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { faFileArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSidenavModule, MatCheckboxModule, MatMenu, MatIconModule, FormsModule, CommonModule,MatMenuTrigger, MatButtonModule, SideBar, FontAwesomeModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  opened = false;
  faBars = faBars;
  faAngleDown = faAngleDown;

  reports = [
    {
      name: 'Loan Report',
      category: 'Loan',
      lastRun: 'User, Admin',
      date: 'Sep 12, 2022'
    },
    {
      name: 'Finance Summary Report',
      category: 'Finance',
      lastRun: 'Admin User',
      date: 'Aug 12, 2022'
    },
    {
      name: 'Guarantor Summary Report',
      category: 'Loan',
      lastRun: 'User, Admin',
      date: 'Aug 12, 2022'
    }
  ];

  datasource = this.reports;
}
