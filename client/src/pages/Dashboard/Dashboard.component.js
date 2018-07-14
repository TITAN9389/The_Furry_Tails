import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPets } from '../../actions/pets.actions';

import { HomeCardComponent } from '../../components';

import './Dashboard.component.css';

const mapStateToProps = ({ home }) => {
	return { pets: home.pets };
};
const mapDispatchToProps = dispatch => {
	return { fetchDashboardPets: () => dispatch(fetchPets()) };
};

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchDashboardPets();
	}

	render() {
		return <Card.Group itemsPerRow={4}>{this.props.pets.map(p => <HomeCardComponent {...p} key={p._id}/> )}</Card.Group>;
	}
}

export const DashboardComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
