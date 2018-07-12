import './App.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Adoption from './Adoption/Adoption';

export const history = createHistory();

const App = () => (
	<Router history={history}>
		<div>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/adoption" component={Adoption} />
			</Switch>
		</div>
	</Router>
);

export default hot(module)(App);
