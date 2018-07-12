import 'sanitize.css';
import './global.css?raw';
import './style.css';

import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import { AppComponent } from './main/App';

import axios from 'axios';
window.axios = axios;

// Store Creation
// const store = createStore();

render(<AppComponent />, document.getElementById('app'));

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
