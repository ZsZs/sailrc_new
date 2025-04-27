import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideExperimentalZonelessChangeDetection, SecurityContext } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAppPropertyStore, WidgetsModule } from '@processpuzzle/widgets';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppInitializer, CONFIGURATION_APP_INITIALIZER, CONFIGURATION_OPTIONS, CONFIGURATION_TYPE, ConfigurationService, LayoutService, RUNTIME_CONFIGURATION } from '@processpuzzle/util';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { RuntimeConfiguration } from './runtime-configuration';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CLIPBOARD_OPTIONS, ClipboardButtonComponent, MERMAID_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { provideShareButtonsOptions } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(WidgetsModule),
    provideAppPropertyStore(),
    provideAnimationsAsync(),
    provideAuth(() => {
      const auth = getAuth();
      const pipelineStage = environment.PIPELINE_STAGE ?? 'ci';
      if (pipelineStage === 'dev') connectAuthEmulator(auth, `http://localhost:9099`);
      else if (pipelineStage === 'ci') connectAuthEmulator(auth, `http://firebase:9099`);
      return auth;
    }),
    provideExperimentalZonelessChangeDetection(),
    provideFirebaseApp(() => initializeApp(inject(FIREBASE_OPTIONS)), [FIREBASE_OPTIONS]),
    {
      provide: FIREBASE_OPTIONS,
      useFactory: () => {
        const runtimeConfig: RuntimeConfiguration = inject(RUNTIME_CONFIGURATION);
        return runtimeConfig.FIREBASE_CONFIG;
      },
      deps: [RUNTIME_CONFIGURATION],
    },
    provideFirestore(() => {
      const firestore = getFirestore();
      const pipelineStage = environment.PIPELINE_STAGE ?? 'ci';
      if (pipelineStage === 'dev') connectFirestoreEmulator(firestore, 'localhost', 8080);
      else if (pipelineStage === 'ci') connectFirestoreEmulator(firestore, 'firebase', 9090);
      return firestore;
    }),
    provideHttpClient(),
    provideNativeDateAdapter(),
    provideRouter(appRoutes),
    LayoutService,
    provideAppInitializer(() => {
      const initializer = inject(AppInitializer);
      return initializer.init();
    }),
    { provide: CONFIGURATION_TYPE, useValue: RuntimeConfiguration },
    { provide: CONFIGURATION_APP_INITIALIZER, useValue: [] },
    {
      provide: CONFIGURATION_OPTIONS,
      useValue: {
        urlFactory: () => {
          const pipelineStage = environment.PIPELINE_STAGE ?? 'ci';
          return ['run-time-conf/config.common.json', `run-time-conf/config.${pipelineStage.toLocaleLowerCase()}.json`];
        },
        log: true,
      },
    },
    {
      provide: RUNTIME_CONFIGURATION,
      useFactory: (configurationService: ConfigurationService<RuntimeConfiguration>) => {
        const config: RuntimeConfiguration = configurationService.configuration;
        const apiKey = { apiKey: environment.FIREBASE_API_KEY ?? '' };
        const firebaseConfig = { ...config.FIREBASE_CONFIG, ...apiKey };

        return { ...config, ...{ FIREBASE_CONFIG: firebaseConfig } };
      },
      deps: [ConfigurationService],
    },
    provideMarkdown({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
      mermaidOptions: {
        provide: MERMAID_OPTIONS,
        useValue: {
          darkMode: true,
          look: 'handDrawn',
        },
      },
      clipboardOptions: {
        provide: CLIPBOARD_OPTIONS,
        useValue: {
          buttonComponent: ClipboardButtonComponent,
        },
      },
    }),
    provideShareButtonsOptions(shareIcons()),
  ],
};
