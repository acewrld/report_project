import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material-module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-report-page',
  imports: [MaterialModule, FormsModule, NgClass],
  templateUrl: './report-page.html',
})

export class ReportPage {
opened = true;
selectedCategory = '';
selectedMemberNumber = '';
selectedAccountNumber = '';
selectedDate = '';
selectedStatus = '';

selectCategory(category: string) {
  this.selectedCategory = category;
}

runReport() {
  if (this.selectedAccountNumber && this.selectedMemberNumber && this.selectedDate
  )
    this.selectedStatus = 'Report Generated'
    this.opened = false
}

resetForm() {
  this.selectedCategory = '';
  this.selectedMemberNumber = '';
  this.selectedAccountNumber = '';
  this.selectedDate = '';
  this.selectedStatus = '';
  this.opened = true;
}
}
