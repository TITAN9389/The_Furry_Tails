import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import './Dashboard.component.css';

const animals = [
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
	render() {
		return (
			<Card.Group itemsPerRow={4}>
				{animals.map(animal => (
					<Card key={animal.id}>
						<Image
							src={animal.image}
							rounded
							label={{
								as: 'a',
								color: `${
									animal.sex === 'Male' ? 'blue' : 'pink'
								}  `,
								ribbon: true,
								content: `${
									animal.sex === 'Male'
										? '♂ Male'
										: '♀ Female'
								}`
							}}
						/>
						<Card.Content>
							<Card.Header>{animal.name}</Card.Header>
							<Card.Meta>{animal.breed}</Card.Meta>
							<Card.Description>{animal.about}</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div>
								<i>
									<Icon color="black" name="users" />{' '}
									{animal.team}
								</i>{' '}
								-
								<i>
									<Icon
										color="red"
										name="map marker alternate"
									/>
									{animal.location}
								</i>{' '}
								-
								<i>
									<Icon color="black" name="birthday" />
									{animal.age}
								</i>{' '}
								-
								<i>
									<Icon
										color="black"
										name="resize vertical"
									/>
									{animal.size}
								</i>
							</div>
						</Card.Content>
					</Card>
				))}
			</Card.Group>
		);
	}
}

export { DashboardComponent };

// <Segment raised>
// 	<Label as="a" color="red" ribbon>
// 		Overview
// 	</Label>
// 	<span>Account Details</span>
// 	<Label as="a" color="blue" ribbon>
// 		Community
// 	</Label>
// 	<span>User Reviews</span>
// </Segment>;
