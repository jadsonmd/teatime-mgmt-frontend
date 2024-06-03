import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { provideAuth0, } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

appConfig.providers.push(provideAuth0({
  domain: '',
  clientId: '',
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}));

// bootstrapApplication(AppComponent, appConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));

