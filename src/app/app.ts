import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './components/side-bar/side-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, SideBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('report_project');
}
