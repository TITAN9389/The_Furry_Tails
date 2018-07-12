import './App.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Adoption from './Adoption/Adoption';
import Teams from './Teams/Teams';
import SaveaSoul from './SaveaSoul/SaveaSoul';
import AboutUs from './AboutUs/AboutUs';
import PetServices from './PetServices/PetServices';
import Footer from './Navbar/Footer';

export const history = createHistory();

const App = () => (
	<Router history={history}>
		<div styleName="main_container">
			<Navbar />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/adoption" component={Adoption} />
				<Route path="/teams" component={Teams} />
				<Route path="/sas" component={SaveaSoul} />
				<Route path="/about" component={AboutUs} />
				<Route path="/services" component={PetServices} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default hot(module)(App);
