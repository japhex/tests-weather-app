import React, {Component} from 'react'
import Moment from 'moment';
import './SunSettings.scss';

class SunSettings extends Component {
	render() {
		const sunrise = Moment.unix(this.props.sunrise).format('HH:mm A');
		const sunset = Moment.unix(this.props.sunset).format('HH:mm A');

		return (
			<div className="weather-body__sun-settings">
				<div>
					<span>sunrise:</span> {sunrise}
				</div>
				<div>
					<span>sunset:</span> {sunset}
				</div>
			</div>
		)
	}
}

export default SunSettings
