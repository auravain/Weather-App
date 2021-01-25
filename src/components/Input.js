import { cityNames } from '../searchbox/cityNames';
import { useContext } from 'react';
import { ForecastContext } from './ForecastContext';

const Input = () => {
	const { setSearchKey } = useContext(ForecastContext);

	const changeHandler = (e) => {
		setSearchKey(e.target.value);
	};

	return (
		<form className="form" onChange={changeHandler}>
			{cityNames}
		</form>
	);
};

export default Input;
