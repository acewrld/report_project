import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SideBar } from '../side-bar/side-bar';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    SideBar,
  ],
  templateUrl: './main-layout.html',
})
export class MainLayout {
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