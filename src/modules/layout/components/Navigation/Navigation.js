import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import './Navigation.scss';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			top: false
		}
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		return (
			<Fragment>
				<a href={'#'} className={'main-header__trigger'} onClick={(e) => {this.setState({'top': true}); e.preventDefault();}}><Menu /></a>
				<Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
					<div tabIndex={0} role="button" onClick={this.toggleDrawer('top', false)}>
						<nav>
							<ul>
								<li>
									<Link to="/">
										Open Weather
									</Link>
								</li>
								<li>
									<Link to="/tremendous">
										Tremendous Weather
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</Drawer>
			</Fragment>
		);
	}
}

export default Header;
