import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { productReducer } from './app/feature/product/store/ProductReducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './app/feature/product/store/ProductEffects';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(HttpClientModule),
    provideStore({ productStateGlobal: productReducer }),
    provideEffects(ProductEffects)

  ]
})
  .catch((err) => console.error(err));
