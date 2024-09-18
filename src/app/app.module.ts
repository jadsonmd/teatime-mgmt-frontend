import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment as env } from '../environments/enviroment';
import { environment } from '../environments/environment';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TreeMenuComponent } from './component/tree-menu/tree-menu.component';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [AppComponent, TreeMenuComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
    MatSidenavModule,
    MatTreeModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      // The domain and clientId were configured in the previous chapter
      domain: env.auth.domain,
      clientId: env.auth.clientId,
    
      authorizationParams: {
        redirect_uri: window.location.origin,
        // Request this audience at user authentication time
        audience: env.auth.authorizationParams.audience,
        // Request this scope at user authentication time 
        scope: 'profile openId email',
      },
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://localhost:8080/api/v2/' (note the asterisk)
            // uri: `${window.location.origin}/*`,
            uri: `${environment.apiUrl}/*`,
            tokenOptions: {
              authorizationParams: env.auth.authorizationParams,
            }
          }
        ]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// https://github.com/auth0-samples/auth0-angular-samples/blob/main/Sample-01/src/app/app.module.ts