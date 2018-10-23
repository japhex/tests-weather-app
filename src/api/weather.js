import axios from "axios/index"

class WeatherAPI {
	static getOpenWeather() {
		return axios.get(`/api/weather0.json`).then(res => res.data);
	}

	static getTremendousWeather() {
		return axios.get(`/api/weather1.json`).then(res => res.data);
	}
}

export default WeatherAPI;
