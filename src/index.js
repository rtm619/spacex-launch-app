/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import spaceXApi from './services/spaceX.service';
import configureStore from './store/index.store';

async function renderApp() {
  let renderMethod = ReactDOM.hydrate;

  if (process.env.NODE_ENV === 'development') {
    // To Run App in Dev Mode (Client Only) with Data and Hot-Reloading
    const data = await spaceXApi();
    window.__REACT_INITIAL_PROPS = { data, filters: {} };
    renderMethod = ReactDOM.render;
  }

  renderMethod(
    <React.StrictMode>
      <ReduxProvider store={configureStore({ spaceXReducer: window.__REACT_INITIAL_PROPS })}>
        <App />
      </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

renderApp();
