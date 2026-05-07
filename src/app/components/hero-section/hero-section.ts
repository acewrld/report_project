import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { RouterLink } from "@angular/router";
import {faLock, faBolt, faChartBar} from '@fortawesome/free-solid-svg-icons';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule, MatIcon, RouterLink],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  imgSrc = '../assets/mockup.jpg';
  faLock = faLock;
  faBolt = faBolt;
  faChartBar = faChartBar;
}
