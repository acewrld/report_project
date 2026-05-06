import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBar } from '../../components/side-bar/side-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-page',
  imports: [MatMenuModule, MatSidenavModule, SideBar, FontAwesomeModule, MatCardModule],
  templateUrl: './report-page.html',
  styleUrls: ['./report-page.css'],
})
export class ReportPage {
  opened = false;
  faBars = faBars;
  faAngleDown = faAngleDown;
  selectedCategory: string = '';
  selectedMemberNumber: string = '';
  selectedAccountNumber: string = '';
  selectedStatus: string = '';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedMemberNumber = '';
    this.selectedAccountNumber = ''; 
    this.selectedStatus = ''; 
  }
}
