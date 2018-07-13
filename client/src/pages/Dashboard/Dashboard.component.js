import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPets } from '../../actions';

import './Dashboard.component.css';

const pets = [
	{
		id: '1',
		name: 'Zeus',
		type: 'Dog',
		age: '2y',
		sex: 'Male',
		breed: 'Labrador',
		size: 'Medium',
		location: 'Abovyan',
		team: 'Dingo',
		image: 'https://placeimg.com/640/480/animals'
	},
	{
		id: '2',
		name: 'Jax',
		type: 'Dog',
		age: '3y',
		sex: 'Male',
		breed: 'Malamute',
		size: 'Medium',
		location: 'Ejmiatsin',
		team: 'Pawsitive',
		image: 'https://picsum.photos/640/480?image=659'
	},
	{
		id: '3',
		name: 'Tom',
		type: 'Cat',
		age: '9m',
		sex: 'Male',
		breed: 'Mix',
		size: 'Medium',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'http://placekitten.com/640/480'
	},
	{
		id: '4',
		name: 'Max',
		type: 'Dog',
		age: '1.5y',
		sex: 'Female',
		breed: 'Mix',
		size: 'Medium',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'https://loremflickr.com/640/480/dog'
	},
	{
		id: '5',
		name: 'Zeus',
		type: 'Dog',
		age: '2y',
		sex: 'Male',
		breed: 'Labrador',
		size: 'Medium',
		location: 'Abovyan',
		team: 'Dingo',
		image: 'https://placeimg.com/640/480/animals'
	},
	{
		id: '6',
		name: 'Jax',
		type: 'Dog',
		age: '3y',
		sex: 'Female',
		breed: 'Malamute',
		size: 'Medium',
		location: 'Ejmiatsin',
		team: 'Pawsitive',
		image: 'https://picsum.photos/640/480?image=659'
	},
	{
		id: '7',
		name: 'Tom',
		type: 'Cat',
		age: '9m',
		sex: 'Male',
		breed: 'Mix',
		size: 'Medium',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'http://placekitten.com/640/480'
	},
	{
		id: '8',
		name: 'Max',
		type: 'Dog',
		age: '1.5y',
		sex: 'Female',
		breed: 'Mix',
		size: 'Medium',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'https://loremflickr.com/640/480/dog'
	}
];

class DashboardComponent extends Component {
	componentDidMount() {
		this.props.fetchPets();
	}

	renderPets() {
		return this.props.pets.map(pet => (
			<Card key={pet.id}>
				<Image
					src={pet.image}
					rounded
					label={{
						as: 'a',
						color: `${pet.sex === 'Male' ? 'blue' : 'pink'}  `,
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

function mapStateToProps({ pets }) {
	return { pets };
}

// export connect(mapStateToProps, { fetchPets })(DashboardComponent);
export { DashboardComponent };
