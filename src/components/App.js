import React from 'react';
import { hot } from 'react-hot-loader';

import Dashboard from './Dashboard/Dashboard';
import './App.css';

const App = () => {
	return (
		<div>
			<Dashboard />
		</div>
	);
};

export default hot(module)(App);
