import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { BarChart } from '../../components/bar-chart/bar-chart';
import { DashboardInterface } from '../../interface/dashboard-interface';
import { ReportService } from '../../services/reports';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule, BarChart],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  dashboardData: DashboardInterface[] = [];
  g_user = '';
  searchText = '';
  activeTab = '6m';
  loading = true;

  chartTabs = [
    { label: '6 months', value: '6m' },
    { label: '1 year', value: '1y' },
    { label: 'All time', value: 'all' },
  ];

  constructor(
    private reportService: ReportService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.g_user = this.reportService.globalState.user;
  }

  loadDashboardData(): void {
    this.reportService.getApi().subscribe({
      next: (data: DashboardInterface[]) => {
        this.dashboardData = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.cdr.detectChanges();
      },
    });
  }


  onSearch(value: string): void {
    this.searchText = value;
  }
}