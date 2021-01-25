import { useContext, useEffect } from 'react';
import { ForecastContext } from './ForecastContext';
import { search } from '../searchbox/search';

const Forecast = () => {
	const { searchKey, results, setResults } = useContext(ForecastContext);

	useEffect(() => {
		search(searchKey).then((response) => {
			setResults(response);
		});
	}, [searchKey, setResults]);

	return (
		<div className="forecastsContainer">
			{results.map((result, index) => {
				return (
					<div
						className={index === 0 ? 'forecastContainer-currentDay' : 'forecastContainer'}
						key={index}
					>
						<p className="date">{result.dateTime}</p>
						<img src={`https://www.weatherbit.io/static/img/icons/${result.iconCode}.png`} alt="" />
						<div className="minMax">
							<p className="max">
								{result.maxTemp}
								<span>&#176;</span>
							</p>
							<p className="min">
								{result.minTemp}
								<span>&#176;</span>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Forecast;
