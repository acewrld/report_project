import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-report-page',
  imports: [MaterialModule, FormsModule],
  templateUrl: './report-page.html',
})

export class ReportPage {
  opened = false;
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
