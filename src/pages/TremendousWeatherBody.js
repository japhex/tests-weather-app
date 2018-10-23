import React, {Component} from 'react';
import WeatherAPI from "../api/weather";
import City from "../modules/components/City/City";
import Temperature from "../modules/components/Temperature/Temperature";
import TemperatureSettings from '../modules/components/TemperatureSettings/TemperatureSettings';
import Description from "../modules/components/Description/Description";
import SunSettings from "../modules/components/SunSettings/SunSettings";
import { WiDayRainMix } from "weather-icons-react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import './../modules/components/WeatherBody/WeatherBody.scss';

class WeatherBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tremendous: {}
		};
	}

	async componentDidMount() {
		const tremendous = await WeatherAPI.getTremendousWeather();

		this.setState({tremendous:tremendous});
	}

	render() {
		const tremendous = this.state.tremendous;
		let temperature = tremendous.main !== undefined ? tremendous.main.temp.value : 0;
		temperature = tremendous.main !== undefined ? Math.round(temperature - 273.15) : temperature;
		const description = tremendous.weather === undefined ? '' : tremendous.weather[0].main;
		const subDescription = tremendous.weather === undefined ? '' : tremendous.weather[0].description;
		const sunrise = tremendous.sys === undefined ? new Date() : tremendous.sys.sunrise;
		const sunset = tremendous.sys === undefined ? new Date() : tremendous.sys.sunset;
		const minTemp = tremendous.main === undefined ? 0 : Math.round(tremendous.main.temp_min - 273.15);
		const maxTemp = tremendous.main === undefined ? 0 : Math.round(tremendous.main.temp_max - 273.15);

		return (
			<Card className={'weather-body'}>
				<CardActionArea>
					<CardContent className={'weather-body__content'}>
						<WiDayRainMix size={94} color='#637bfe' className={'weather-body__icon'} />
						<City city={tremendous.name} />
						<Temperature temperature={temperature} unit={'celsius'} />
						<TemperatureSettings minTemp={minTemp} maxTemp={maxTemp} />
						<Description description={description} subDescription={subDescription} />
						<SunSettings sunrise={sunrise} sunset={sunset} />
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}

export default WeatherBody
