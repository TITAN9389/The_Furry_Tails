import 'sanitize.css';
import './global.css?raw';
import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import reduxThunk from 'redux-thunk';

import { AppComponent } from './main/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

// Store Creation
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
);

injectGlobal`
  body {
  position: relative;
  min-height: 100vh;
  padding: 30px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-blend-mode: overlay;
  }
`;
