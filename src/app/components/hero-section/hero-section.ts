import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { RouterLink } from "@angular/router";
import {faLock, faBolt, faChartBar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  imgSrc = '../assets/mockup.jpg';
  faLock = faLock;
  faBolt = faBolt;
  faChartBar = faChartBar;
}
