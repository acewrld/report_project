import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MaterialModule } from './material/material-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('report_project');

  opened = signal(true);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.opened.set(false);
      });
  }

  toggleSidenav() {
    this.opened.set(!this.opened());
  }
}

export class GlobalService {

  // Global variables
  user: string = 'Ademola';
}

