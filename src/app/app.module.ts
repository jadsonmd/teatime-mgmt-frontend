import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/enviroment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  declarations: [AppComponent, TreeMenuComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({...env.auth, httpInterceptor: {...env.httpInterceptor}}),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
    MatSidenavModule,
    MatTreeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// https://github.com/auth0-samples/auth0-angular-samples/blob/main/Sample-01/src/app/app.module.ts