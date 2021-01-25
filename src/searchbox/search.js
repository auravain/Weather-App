import axios from 'axios';
const apiKey = '2473145ff9ad488ca337b01662025e95';
const urlToFetch = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';

export const search = async (searchKey) => {
	try {
		const response = await axios.get(`${urlToFetch}${searchKey}&days=7&key=${apiKey}`);
		const forecasts = response.data.data.map((forecast) => {
			const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const d = new Date(forecast.datetime);
			const date = days[d.getDay()];

			return {
				maxTemp: forecast.app_max_temp,
				minTemp: forecast.app_min_temp,
				dateTime: date,
				iconCode: forecast.weather.icon,
			};
		});
		return forecasts;
	} catch (e) {
		console.log(e);
	}
};
