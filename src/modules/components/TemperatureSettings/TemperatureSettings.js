import React, {Component} from 'react';
import './TemperatureSettings.scss';

class TemperatureSettings extends Component {
	render() {
		const minTemp = this.props.minTemp;
		const maxTemp = this.props.maxTemp;

		return (
			<div className="weather-body__temperature-settings">
				<div>
					<span>min temp:</span> {minTemp}
				</div>
				<div>
					<span>max temp:</span> {maxTemp}
				</div>
			</div>
		)
	}
}

export default TemperatureSettings
