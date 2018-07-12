import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

import './Dashboard.css';

const animals = [
	{
		id: '1',
		name: 'Zeus',
		type: 'Dog',
		age: '2y',
		breed: 'Labrador',
		location: 'Abovyan',
		team: 'Dingo',
		image: 'https://placeimg.com/640/480/animals'
	},
	{
		id: '2',
		name: 'Jax',
		type: 'Dog',
		age: '3y',
		breed: 'Malamute',
		location: 'Ejmiatsin',
		team: 'Pawsitive',
		image: 'https://picsum.photos/640/480?image=659'
	},
	{
		id: '3',
		name: 'Tom',
		type: 'Cat',
		age: '9m',
		breed: 'Mix',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'http://placekitten.com/640/480'
	},
	{
		id: '4',
		name: 'Max',
		type: 'Dog',
		age: '1.5y',
		breed: 'Mix',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'https://loremflickr.com/640/480/dog'
	},
	{
		id: '5',
		name: 'Zeus',
		type: 'Dog',
		age: '2y',
		breed: 'Labrador',
		location: 'Abovyan',
		team: 'Dingo',
		image: 'https://placeimg.com/640/480/animals'
	},
	{
		id: '6',
		name: 'Jax',
		type: 'Dog',
		age: '3y',
		breed: 'Malamute',
		location: 'Ejmiatsin',
		team: 'Pawsitive',
		image: 'https://picsum.photos/640/480?image=659'
	},
	{
		id: '7',
		name: 'Tom',
		type: 'Cat',
		age: '9m',
		breed: 'Mix',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'http://placekitten.com/640/480'
	},
	{
		id: '8',
		name: 'Max',
		type: 'Dog',
		age: '1.5y',
		breed: 'Mix',
		location: 'Yerevan',
		team: 'SDOA',
		image: 'https://loremflickr.com/640/480/dog'
	}
];

export default class Dashboard extends Component {
	render() {
		return (
			<Card.Group itemsPerRow={4}>
				{animals.map(animal => (
					<Card
						key={animal.id}
						image={animal.image}
						header={animal.name}
						meta={animal.breed}
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus alias nostrum blanditiis harum doloribus neque maiores voluptates accusantium, molestiae maxime facere dolore repellat cum dolor? Quis commodi odio obcaecati!"
						extra={
							<div>
								<i>
									<Icon name="users" />
									{animal.team}
								</i>
								<i>
									<Icon name="map marker alternate" />
									{animal.location}
								</i>
								<i>
									<Icon name="birthday" />
									{animal.age}
								</i>
							</div>
						}
					/>
				))}
			</Card.Group>
		);
	}
}
