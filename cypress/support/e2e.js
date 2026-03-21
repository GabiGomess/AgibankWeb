// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Cypress.on('window:before:load', (win) => {
  if (!win.KeyboardEvent) {
    win.KeyboardEvent = function(type, eventInitDict) {
      return new win.Event(type, eventInitDict);
    };
  }
  // Polyfill KeyboardEvent on Event prototype
  if (!win.Event.prototype.KeyboardEvent) {
    Object.defineProperty(win.Event.prototype, 'KeyboardEvent', {
      get: () => win.KeyboardEvent,
      enumerable: true,
      configurable: true
    });
  }
});