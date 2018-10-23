import React, {Component} from 'react'
import './City.scss';

class City extends Component {
	render() {
		const city = this.props.city;

		return (
			<h1 className="weather-body__city">
				{city}
			</h1>
		)
	}
}

export default City
