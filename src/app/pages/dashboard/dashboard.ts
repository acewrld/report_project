import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { DASHBOARDLIST, DashboardList } from '../../api/dashboard';
import { SearchBtn } from '../../components/search-btn/search-btn';
import { BarChart } from '../../components/bar-chart/bar-chart';
import { GlobalStateService } from '../../services/global-state';

@Component({
  selector: 'app-dashboard',
  imports: [MaterialModule, CommonModule, SearchBtn, BarChart],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  constructor( public globalState: GlobalStateService) {}

  ngOnInit() {
    console.log(this.globalState.user);
  }

  searchText = '';
  activeTab = '6m';

  chartTabs = [
    { label: '6 months', value: '6m' },
    { label: '1 year', value: '1y' },
    { label: 'All time', value: 'all' },
  ];

  

  reports: DashboardList[] = DASHBOARDLIST;
  
  datasource = this.reports;

  onSearch(value: string) {
    this.searchText = value;
    console.log('Search text:', this.searchText);
  }
}