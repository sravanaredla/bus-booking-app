import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())  ]
  /**
   * In Angular, the withFetch option when using provideHttpClient is part of the HttpClient module that allows you to enhance your HTTP requests with additional capabilities. Specifically, withFetch enables the use of the Fetch API under the hood instead of the traditional XMLHttpRequest method that Angular's HttpClient typically uses.

Purpose of withFetch
Modern API: The Fetch API is a more modern approach for making HTTP requests, offering a more straightforward and flexible interface.

Promises: Fetch returns Promises, making it easier to work with asynchronous operations compared to the callback-based approach of XMLHttpRequest.

Streaming: Fetch supports streaming responses, which can be beneficial for handling large data sets or when you want to process data as it arrives.

CORS Handling: Fetch has more advanced handling of Cross-Origin Resource Sharing (CORS) requests, which can simplify some configurations compared to the older methods.

Customization: It allows for more extensive customization of requests and responses, enabling better control over headers, modes, and credentials.
   */
};
