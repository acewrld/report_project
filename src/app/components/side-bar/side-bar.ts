import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive, MatIcon, MatMenuModule, FormsModule],
  templateUrl: './side-bar.html',
})
export class SideBar {
  selectedDepartment: string = '';

  selectDepartment(department: string) {
    this.selectedDepartment = department;
  }
}
