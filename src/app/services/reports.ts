import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportInterface } from '../interface/report';
import { DashboardInterface } from '../interface/dashboard-interface';

@Injectable({
  providedIn: 'root',
})
export class ReportService {

  constructor (private http: HttpClient) {}

  getReport(): Observable<ReportInterface[]> {
    return this.http.get<ReportInterface[]> ('https://dummyjson.com/c/ccf3-893a-4e66-9f98');
  }

  getApi(): Observable<DashboardInterface[]> {
    return this.http.get<DashboardInterface[]> ('https://dummyjson.com/c/aada-22d5-4cc8-8194')
  } 

  globalState = {
    user: 'John Doe'
  };

  setGlobalState(user: string) {
    this.globalState.user = user;
  }
}
