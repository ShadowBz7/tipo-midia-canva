// src/main.ts
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication }      from '@angular/platform-browser';
import { HttpClientModule }          from '@angular/common/http';
import { FormsModule }               from '@angular/forms';
import { provideRouter }             from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes }       from './app/app.routes';
import { environment }  from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      FormsModule
    ),
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
