import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './modules/layout/components/Header/Header';
import WeatherBody from './pages/WeatherBody';
import TremendousWeatherBody from './pages/TremendousWeatherBody';
import './App.scss';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="weather-app">
					<header>
						<Header />
					</header>
					<div>
						<Route exact path="/" component={WeatherBody} />
						<Route exact path="/tremendous" component={TremendousWeatherBody} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
