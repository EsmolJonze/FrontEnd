import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app';
import { Provider } from 'react-redux';
import reducer from './js/reducers';
import { createStore } from 'redux';
import * as Sentry from '@sentry/react';
import { servicesEnv } from './js/misc/api/ApiHosts';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import routerHistory from './js/app/history';
import mixpanel from 'mixpanel-browser';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

let enableDevTools = true;
if (window.location.hostname === 'app.bloobirds.com') {
  enableDevTools = false;
  mixpanel.init('b2373343acb028c8d63ce064fadcada2');
} else {
  mixpanel.init('7700a68ac54ffa55064f2f2739a6a47e');
}

if (!isLocalhost) {
  Sentry.init({
    dsn: 'https://bdf7227780ad49d2bdb208b40ead4b88@o328732.ingest.sentry.io/1842685',
    environment: servicesEnv,
    integrations: [
      new TracingIntegrations.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV5Instrumentation(routerHistory),
      }),
    ],
    release: `bloobirds@${process.env.REACT_APP_VERSION}`,
    tracesSampleRate: 1,
    ignoreErrors: [
      // Random plugins/extensions
      'top.GLOBALS',
      // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
      'originalCreateNotification',
      'canvas.contentDocument',
      'MyApp_RemoveAllHighlights',
      'http://tt.epicplay.com',
      "Can't find variable: ZiteReader",
      'jigsaw is not defined',
      'ComboSearch is not defined',
      'http://loading.retry.widdit.com/',
      'atomicFindClose',
      // Facebook borked
      'fb_xd_fragment',
      // ISP "optimizing" proxy - `Cache-Control: no-transform` seems to
      // reduce this. (thanks @acdha)
      // See http://stackoverflow.com/questions/4113268
      'bmi_SafeAddOnload',
      'EBCallBackMessageReceived',
      // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
      'conduitPage',
    ],
    denyUrls: [
      // Facebook flakiness
      /graph\.facebook\.com/i,
      // Facebook blocked
      /connect\.facebook\.net\/en_US\/all\.js/i,
      // Woopra flakiness
      /eatdifferent\.com\.woopra-ns\.com/i,
      /static\.woopra\.com\/js\/woopra\.js/i,
      // Chrome extensions
      /extensions\//i,
      /^chrome:\/\//i,
      // Other plugins
      /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
      /webappstoolbarba\.texthelp\.com\//i,
      /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
    ],
  });
}

if (!Date.prototype.toISODate) {
  // eslint-disable-next-line no-extend-native,func-names
  Date.prototype.toISODate = function() {
    return `${this.getFullYear()}-${`0${this.getMonth() + 1}`.slice(
      -2,
    )}-${`0${this.getDate()}`.slice(-2)}`;
  };
}

const reduxDevTools =
  enableDevTools &&
  isLocalhost &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true,
  });

console.info(`VERSION: ${process.env.REACT_APP_VERSION} - NODE ENV: ${process.env.NODE_ENV}`);

const store = reduxDevTools ? createStore(reducer, reduxDevTools) : createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
