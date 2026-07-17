import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators,} from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmailReport } from '../../components/email-report/email-report';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    MaterialModule,
  ],
  templateUrl: './report-page.html',
})
export class ReportPage implements OnInit {
  opened = true;
  hideModal = true;

  name = '';
  reportDate = '';

  selectedCategory = '';
  selectedMemberNumber = '';
  selectedAccountNumber = '';
  selectedDate = '';
  selectedStatus = '';

  form = new FormGroup({
    memberNumber: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    reportDate: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ name }) => {
      this.name = name;
      console.log('Report Name:', this.name);
    });
  }

  runReport(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.opened = false;
      return;
    }

    this.reportDate = this.form.value.reportDate ?? '';
    this.selectedMemberNumber = this.form.value.memberNumber ?? '';
    this.selectedAccountNumber = this.form.value.accountNumber ?? '';
    this.selectedStatus = 'Report Generated';

    this.opened = false;
    this.hideModal = false;
  }

  resetForm(): void {
    this.form.reset();

    this.reportDate = '';
    this.selectedCategory = '';
    this.selectedMemberNumber = '';
    this.selectedAccountNumber = '';
    this.selectedDate = '';
    this.selectedStatus = '';

    this.opened = true;
    this.hideModal = true;
  }


  openEmailDialog(): void {
    this.dialog.open(EmailReport)
  }
}