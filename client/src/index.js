
import 'sanitize.css';
import './global.css?raw';
import './style.css';


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';


import { AppComponent } from './main/App';

import { configureStore } from './store/configure_store';

import axios from 'axios';
window.axios = axios;


require("babel-core/register");
require("babel-polyfill");


const store = configureStore();


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
