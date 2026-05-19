import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive, MaterialModule, FormsModule],
  templateUrl: './side-bar.html',
})
export class SideBar {
  selectedDepartment: string = '';
  

  selectDepartment(department: string) {
    this.selectedDepartment = department;

  }

  dropdownLink = [
    {
      id: '1',
      name: 'Account and Finance',
      iconUrl: 'payment',
      selectItem: '/report'
    },
    {
      id: '2',
      name: 'BOSA',
      iconUrl:'account_balance',
      uselectItemrl: '/report'
    },
    {
      id: '3',
      name: 'CUSTOMER SERVICE, SAVINGS AND FOSA',
      iconUrl:'support_agent',
      selectItem: '/report'
    },
    {
      id: '4',
      name: 'Others',
      iconUrl: 'keyboard_double_arrow_down',
      selectItem: '/report'
    }
  ]
}
