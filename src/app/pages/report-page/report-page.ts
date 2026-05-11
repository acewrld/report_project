import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-report-page',
  imports: [MatMenuModule, MatSidenavModule, FontAwesomeModule, MatCardModule, FormsModule, MatIcon],
  templateUrl: './report-page.html',
})

export class ReportPage {
  opened = false;
  faBars = faBars;
  faAngleDown = faAngleDown;
  selectedCategory = '';
selectedMemberNumber = '';
selectedAccountNumber = '';
selectedDate = '';
selectedStatus = '';

selectCategory(category: string) {
  this.selectedCategory = category;
}

runReport() {
  this.selectedStatus = 'Report Generated';
}

resetForm() {
  this.selectedCategory = '';
  this.selectedMemberNumber = '';
  this.selectedAccountNumber = '';
  this.selectedDate = '';
  this.selectedStatus = '';
}
}
