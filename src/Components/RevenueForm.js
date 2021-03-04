import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Tooltip } from '@material-ui/core';

const RevenueForm = ({rev, setRev, revGrowth, setRevGrowth}) =>{
		const revChangeHandler = (e) =>{
			setRevGrowth(e.target.value);
		}

		const revHandler = (e) =>{
			setRev(e.target.value);
		}



		return (
			<Tooltip title="What was the prior year's revenue in $ millions? How much do you think revenue will grow over the next 10 years?">
			<form className="formBlock"> 
			<label>

			<h1 className="formLabel">Recent Annual Revenue</h1>
				<input type="text"
						placeholder="Eg: 7334"
						className="formInput"
						onChange={revHandler}/>

				<h1 className="formLabel">Revenue Growth</h1>
				<input type="text"
						placeholder="Eg: 5%"
						className="formInput"
						onChange={revChangeHandler}/>
			</label>

			</form>
			</Tooltip>
	);
}


export default RevenueForm;