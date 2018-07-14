// @flow
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

// Type PropTypes =  {
// 	_id: string,
// }

export const HomeCardComponent = (props) => (
    <Card key={props._id}>
				<Image
					src={props.image}
					rounded
					label={{
						as: 'a',
						color: `${props.sex === 'Male' ? 'blue' : 'pink'}`,
						ribbon: true,
						content: `${props.sex === 'Male' ? '♂ Male' : '♀ Female'}`
					}}
				/>
				<Card.Content>
					<Card.Header>{props.name}</Card.Header>
					<Card.Meta>{props.breed}</Card.Meta>
					<Card.Description>{props.about}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div>
						<i>
							<Icon color="black" name="users" /> {props.team}
						</i>{' '}
						-
						<i>
							<Icon color="red" name="map marker alternate" />
							{props.location}
						</i>{' '}
						-
						<i>
							<Icon color="black" name="birthday" />
							{props.age}
						</i>{' '}
						-
						<i>
							<Icon color="black" name="resize vertical" />
							{props.size}
						</i>
					</div>
				</Card.Content>
			</Card>
)