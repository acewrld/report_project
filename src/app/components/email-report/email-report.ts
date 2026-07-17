import { Component, NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-email-report',
  imports: [MaterialModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './email-report.html',
})

export class EmailReport {
  disabled = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  sendReport() {
    console.log('Sending report for:', this.email.value);
  }
}
