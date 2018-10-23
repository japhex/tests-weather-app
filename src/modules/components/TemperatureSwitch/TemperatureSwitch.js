import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import {switchTemperature} from './component-events';
import './TemperatureSwitch.scss';

class TemperatureSwitch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			baseTemp: this.props.baseTemp,
			baseUnit: this.props.baseUnit
		}
	}

	componentWillReceiveProps(newProps){
		this.setState({baseTemp: newProps.baseTemp});
		this.setState({baseUnit: newProps.baseUnit});
	}

	handleTemperatureSwitch(e) {
		const newTemp = switchTemperature(e.target.value, this.state.baseTemp);
		PubSub.publish('updateTemp', newTemp);
	}

	render() {
		return (
			<select className={'weather-body__temperature-switch'} onChange={(e) => this.handleTemperatureSwitch(e)}>
				<option value={'c'}>C</option>
				<option value={'f'}>F</option>
			</select>
		)
	}
}

export default TemperatureSwitch
