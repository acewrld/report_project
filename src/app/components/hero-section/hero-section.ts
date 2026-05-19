import { Component } from '@angular/core';

import { RouterLink } from "@angular/router";
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-hero-section',
  imports: [MaterialModule, RouterLink],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  imgSrc = '../assets/mockup.jpg';
  tittle = 'Report Portal'
}
