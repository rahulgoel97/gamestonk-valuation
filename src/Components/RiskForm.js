import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Tooltip } from '@material-ui/core';

const RiskForm = ({risk, setRisk}) =>{
		const riskChangeHandler = (e) =>{
			setRisk(e.target.value);
		}



		return (
			<Tooltip title="What is the discount rate you want to use? This is the cost of capital. Generally, the sum of the equity risk premium and the risk free rate. If you don't want to calculate, you can use 7%">
			<form className="formBlock"> 
			<label>
				<h1 className="formLabel">Risk or Cost of Capital </h1>
				<input type="text"
						placeholder="Eg: 7%"
						className="formInput"
						onChange={riskChangeHandler}/>
			</label>

			</form>
			</Tooltip>
	);
}


export default RiskForm;