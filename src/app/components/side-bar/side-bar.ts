import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../services/reports';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MaterialModule, FormsModule, CommonModule],
  templateUrl: './side-bar.html',
})
export class SideBar {
  user = '';
  
  constructor(private router: Router, private reportService: ReportService) {
    this.user = this.reportService.globalState.user;
  }


   isDeptOpen = false;

  activeRoute: string = '';

  dropdownLink = [
    {
      id: '1',
      name: 'Account and Finance',
      iconUrl: 'payment',
      selectItem: '/department'
    },
    {
      id: '2',
      name: 'BOSA',
      iconUrl: 'account_balance',
      selectItem: '/department'
    },
    {
      id: '3',
      name: 'Customer Service',
      iconUrl: 'support_agent',
      selectItem: '/department'
    },
    {
      id: '4',
      name: 'Others',
      iconUrl: 'keyboard_double_arrow_down',
      selectItem: '/department'
    }
  ];

 

toggleDept(): void {
  this.isDeptOpen = !this.isDeptOpen;
}

goToRoute(route: string) {
  this.router.navigate([route]);
}
}