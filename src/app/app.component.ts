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
export class AppComponent implements OnInit {
  title = 'teatime-mgmt-frontend';

  constructor(public auth: AuthService, public usuarioService: UsuarioService,
    @Inject(DOCUMENT) public document: Document,
  ) { }


  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth.user$.subscribe((user) => {
          if (user && user.sub) {
            user.sub = user.sub.split('|')[1];
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

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {    
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
