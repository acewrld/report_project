import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { HeroSection } from '../../components/hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, LoginForm,],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
