import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPets } from '../../actions';

import './Dashboard.component.css';

const mapStateToProps = ({ pets }) => {
	return { pets };
};
const mapDispatchToProps = dispatch => {
	return { fetchDashboardPets: () => dispatch(fetchPets()) };
};

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchDashboardPets();
	}

	renderPets() {
		return this.props.pets.map(pet => (
			<Card key={pet._id}>
				<Image
					src={pet.image}
					rounded
					label={{
						as: 'a',
						color: `${pet.sex === 'Male' ? 'blue' : 'pink'}`,
						ribbon: true,
						content: `${pet.sex === 'Male' ? '♂ Male' : '♀ Female'}`
					}}
				/>
				<Card.Content>
					<Card.Header>{pet.name}</Card.Header>
					<Card.Meta>{pet.breed}</Card.Meta>
					<Card.Description>{pet.about}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div>
						<i>
							<Icon color="black" name="users" /> {pet.team}
						</i>{' '}
						-
						<i>
							<Icon color="red" name="map marker alternate" />
							{pet.location}
						</i>{' '}
						-
						<i>
							<Icon color="black" name="birthday" />
							{pet.age}
						</i>{' '}
						-
						<i>
							<Icon color="black" name="resize vertical" />
							{pet.size}
						</i>
					</div>
				</Card.Content>
			</Card>
		));
	}

	render() {
		return <Card.Group itemsPerRow={4}>{this.renderPets()}</Card.Group>;
	}
}

export const DashboardComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
