import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material-module';
import { NgClass } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-page',
  imports: [MaterialModule, FormsModule, NgClass, ReactiveFormsModule, CommonModule],
  templateUrl: './report-page.html',
})

export class ReportPage implements OnInit {
    opened = true;
  selectedCategory = '';
  selectedMemberNumber = '';
  selectedAccountNumber = '';
  selectedDate = '';
selectedStatus = '';
  hideModal = true;
  reportDate = '';
name = ''
  form!: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.form = new FormGroup({
      memberNumber: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required),
      reportDate: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log('Report name from routesssyyy:', this.name);
    });
  }

  runReport() {
 if (this.form.invalid) {
    this.form.markAllAsTouched();
    this.opened = false;
    return;
  }
else {
  this.reportDate = this.form.value.reportDate;
  this.selectedMemberNumber = this.form.value.memberNumber;
  this.selectedAccountNumber = this.form.value.accountNumber;
  this.selectedStatus = 'Report Generated';
  this.opened = false;
  this.hideModal = false;
}
  }

resetForm() {
  this.form.reset();
  this.selectedCategory = '';
  this.selectedMemberNumber = '';
  this.selectedAccountNumber = '';
  this.reportDate = '';
  this.selectedStatus = '';
  this.opened = true;
  this.hideModal = true
}
}
