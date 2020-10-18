import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {assetUrl} from '../common/config'

import App from './components/App';
import appReducer from './reducer';

export const renderPage = (radar, pageName) => {
  // Create a new Redux store instance
  const store = createStore(appReducer, {
    ...radar,
    pageName,
    pageState: {},
  });

  let pageTitle;

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App onSetTitle={(title) => { pageTitle = title; }} />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  return renderFullPage(html, pageTitle, preloadedState);
};

const renderFullPage = (html, pageTitle, preloadedState) => {
  return `
  <html>
    <head>
      <meta charset="utf-8">
      <title>${pageTitle} | Niels Langlotz</title>
      <link rel="stylesheet" href="https://www.typoniels.de/typo3conf/ext/typoniels/Resources/Public/Css/TN/critical.css">
      <link rel="stylesheet" href="https://www.typoniels.de/typo3conf/ext/typoniels/Resources/Public/Css/TN/app.css">
      <link rel="stylesheet" href="${assetUrl('css/styles.css')}"/>
      <link rel="shortcut icon" href="${assetUrl('favicon.ico')}" type="image/x-icon">
      <meta name="format-detection" content="telephone=no">
      <meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=0">
      <meta property="og:title" content="${pageTitle} | Niels Langlotz" />
      <meta property="og:image" content="${assetUrl('logo.svg')}" />
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <meta name="HandheldFriendly" content="true">
    </head>
    <body class="bg-white typoniels_techradar">
      <div id="root">${html}</div>
      <script>
        window.__TECHRADAR__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="${assetUrl('js/bundle.js')}"></script>
    </body>
  </html>
    `
};
