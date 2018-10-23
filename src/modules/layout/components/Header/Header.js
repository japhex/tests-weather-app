import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

class Header extends Component {
	render() {
		return (
			<header className={'main-header'}>
				<Navigation  />
			</header>
		);
	}
}

export default Header;
