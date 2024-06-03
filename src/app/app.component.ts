import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teatime-mgmt-frontend';

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) public document: Document,
  ) { }

  login() {
    this.auth.loginWithRedirect();
    // Jadson Mezzari Dagostin
    // jadsonmd@gmail.com
    // Jadson@123
  }

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
}
