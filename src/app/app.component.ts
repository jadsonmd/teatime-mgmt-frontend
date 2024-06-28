import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UsuarioService } from './service/usuario.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'teatime-mgmt-frontend';

  constructor(public auth: AuthService, public usuarioService: UsuarioService,
    @Inject(DOCUMENT) public document: Document,
  ) { }


  ngOnInit(): void {
    console.log('AppComponent.ngOnInit');
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log('AppComponent.auth.isAuthenticated$', isAuthenticated);
      if (isAuthenticated) {
        this.auth.user$.subscribe((user) => {
          if (user && user.sub) {
            this.usuarioService.findById(user.sub).subscribe((usuario) => {
              sessionStorage.setItem('usuario', JSON.stringify(usuario));
            });
          }
        });
      } else {
        //Verificar com calma esse else aqui posteriormente.
        this.auth.loginWithRedirect();
      }
    });
  }

  ngAfterContentInit(): void {
    console.log('AppComponent.ngOnChanges');
  }

  login() {
    console.log('login()');
    
    this.auth.loginWithRedirect();
    console.log('login() - after');
    
    // Jadson Mezzari Dagostin
    // jadsonmd@gmail.com
    // Jadson@123
  }

  teste() {
    this.auth.appState$.subscribe((state) => {
      console.log('AppComponent.auth.appState$', state);
    });
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log('AppComponent.auth.isAuthenticated$', isAuthenticated);
    });
  }

  logout() {
    console.log('logout()');
    
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
