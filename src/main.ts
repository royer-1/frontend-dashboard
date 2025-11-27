import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
import localeEsPeExtra from '@angular/common/locales/extra/es-PE';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

import { appConfig } from './app.config';
import { AppComponent } from './app.component';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../src/app/interceptors/auth.interceptor';

registerLocaleData(localeEsPe, 'es-PE', localeEsPeExtra);

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    { provide: LOCALE_ID, useValue: 'es-PE' },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'dd/MM/yyyy' }  // Fechas por defecto en dd/MM/yyyy
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'PEN'  // Moneda por defecto: Sol peruano
    },
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}).catch((err) => console.error(err));



