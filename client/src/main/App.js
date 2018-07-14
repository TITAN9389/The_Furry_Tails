import '../styles/main.scss';
import React from 'react';
// import { hot } from 'react-hot-loader';
import { MainRouter } from '../routes/MainRouter';
import { FlashMessageComponent } from '../components';
import { connect } from 'react-redux';

const App = ({error}) => (
	<span>
		{error.visible? 
		<FlashMessageComponent 
		success={error.success} 
		message={error.message}/>:
		''
		}
		<MainRouter /> 
	</span>
);
const AppComponent = connect(({globalErrors}) => ({error: globalErrors}))(App);
export { AppComponent };
