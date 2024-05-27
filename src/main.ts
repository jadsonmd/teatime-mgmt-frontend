import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';

appConfig.providers.push(provideAuth0({
  domain: 'YOUR_DOMAIN',
  clientId: 'YOUR_CLIENT',
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
