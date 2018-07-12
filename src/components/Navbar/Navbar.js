import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const colorsA = [
	{ color: 'red', name: 'Home', link: '' },
	{ color: 'orange', name: 'Adoption', link: 'adoption' },
	{ color: 'yellow', name: 'Teams', link: 'teams' },
	{ color: 'olive', name: 'Save a Soul', link: 'sos' },
	{ color: 'green', name: 'About Us', link: 'about' },
	{ color: 'teal', name: 'Pet Services', link: 'services' }
];

export default class Navbar extends Component {
	// state = { activeItem: 'home' };
	state = { activeA: colorsA[0] };

	handleAClick = (e, { name }) => this.setState({ activeA: name });

	render() {
		const { activeA } = this.state;

		return (
			<Menu inverted stackable>
				{colorsA.map(({ color, name, link }) => (
					<Menu.Item
						key={color}
						name={name}
						active={activeA === name}
						color={color}
						as={Link}
						to={`/${link}`}
						onClick={this.handleAClick}
					/>
				))}

				<Menu.Menu position="right">
					<Dropdown item text="Language">
						<Dropdown.Menu>
							<Dropdown.Item>English</Dropdown.Item>
							<Dropdown.Item>Armenian</Dropdown.Item>
							<Dropdown.Item>Russian</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Menu.Item>
						<Button inverted color="blue">
							Sign In
						</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}
