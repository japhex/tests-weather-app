import React, {Component} from 'react';
import WeatherAPI from "../api/weather";
import City from "../modules/components/City/City";
import Temperature from "../modules/components/Temperature/Temperature";
import Description from "../modules/components/Description/Description";
import { WiShowers } from "weather-icons-react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import './../modules/components/WeatherBody/WeatherBody.scss';

class WeatherBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			weather: {}
		};
	}

	async componentDidMount() {
		const weather = await WeatherAPI.getOpenWeather();

		this.setState({weather:weather});
	}

	render() {
		const weather = this.state.weather;
		const temperature = weather.temperature !== undefined ? Math.round(weather.temperature) : 0;

		return (
			<Card className={'weather-body'}>
				<CardActionArea>
					<CardContent className={'weather-body__content'}>
						<WiShowers size={94} color='#637bfe' className={'weather-body__icon'} />
						<City city={weather.where} />
						<Temperature temperature={temperature} unit={'celsius'} />
						<Description description={weather.description} />
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}

export default WeatherBody
