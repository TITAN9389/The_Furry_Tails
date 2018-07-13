import './App.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { MainRouter } from '../routes/MainRouter';


const App = () => (
	<MainRouter /> 
);
const AppComponent = hot(module)(App);
export { AppComponent };
