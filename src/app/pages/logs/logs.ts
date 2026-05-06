import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBar } from '../../components/side-bar/side-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-logs',
  imports: [MatSidenavModule, MatCheckboxModule, MatIconModule, CommonModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './logs.html',
  styleUrl: './logs.css',
})
export class Logs {
  opened = false;
}
