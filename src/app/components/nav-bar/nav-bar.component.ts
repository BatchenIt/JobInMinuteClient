import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

enum NavigationType {
  login = 'login',
  signIn = 'signIn',
  aboutUs = 'aboutUs'
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  navType = NavigationType;

  constructor(private router: Router) { }

  navigate(navigatTo: string): void {
    this.router.navigate([navigatTo]);
  }

}
