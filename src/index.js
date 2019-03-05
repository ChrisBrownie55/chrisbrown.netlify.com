import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

console.log('requestIdleCallback not loaded');

async function loadRequestIdleCallback() {
  if (!window.requestIdleCallback) {
    const polyfill = await import('./polyfills/requestIdleCallback');
    window.requestIdleCallback = polyfill.requestIdleCallback;
    window.cancelIdleCallback = polyfill.cancelIdleCallback;
    console.log(window.requestIdleCallback);
  }
}

Promise.all([loadRequestIdleCallback()])
  .then(() => {
    console.log('requestIdleCallback loaded');
    ReactDOM.render((
      <App />
    ), document.getElementById('root'));
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
