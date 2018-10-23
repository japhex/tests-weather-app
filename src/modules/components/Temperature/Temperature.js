import React, {Component, Fragment} from 'react';
import PubSub from "pubsub-js";
import TemperatureSwitch from "../TemperatureSwitch/TemperatureSwitch"
import './Temperature.scss';

class Temperature extends Component {
	constructor(props) {
		super(props);

		this.state = {
			temperature: this.props.temperature,
			unit: this.props.unit
		}
	}

	componentDidMount() {
		this.token = PubSub.subscribe('updateTemp', this.updateTemp.bind(this));
	}

	componentWillReceiveProps(newProps){
		this.setState({temperature: newProps.temperature});
		this.setState({unit: newProps.unit});
	}

	updateTemp(message, temperature) {
		this.setState({temperature: temperature.temp});
		this.setState({unit: temperature.unit});
	};

	render() {
		return (
			<Fragment>
				<span className="weather-body__temperature">
					{this.state.temperature}&deg; <span>{this.state.unit}</span>
				</span>
				<TemperatureSwitch baseTemp={this.props.temperature} />
			</Fragment>
		)
	}
}

export default Temperature
