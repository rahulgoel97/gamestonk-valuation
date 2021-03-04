import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Tooltip } from '@material-ui/core';

const EfficiencyForm = ({capEfficiency, setCapEfficiency}) =>{
	const capEfficiencyChangeHandler = (e) =>{
		setCapEfficiency(e.target.value);
	}

		return (
			<Tooltip title="How much $ do they generate for each $ invested? Calculate this as Revenue/(Debt+Equity-Cash). This was 4 for $GME in 2018.">
			<form className="formBlock"> 
			<label>
				<h1 className="formLabel">Investment Efficiency</h1>
				<input type="text"
						placeholder="Eg: 4"
						className="formInput"
						onChange={capEfficiencyChangeHandler}/>
			</label>

			</form>
			</Tooltip>
	);
}


export default EfficiencyForm;