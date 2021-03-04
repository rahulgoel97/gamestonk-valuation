import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Tooltip } from '@material-ui/core';

const MarginForm = ({opMargin, setOpMargin}) =>{
		const marginChangeHandler = (e) =>{
			setOpMargin(e.target.value);
		}



		return (
			<Tooltip title="What will be the operating margin ie: What % of revenue remains after operating costs removed?">
			<form className="formBlock"> 
			<label>
				<h1 className="formLabel">Op. Margin</h1>
				<input type="text"
						placeholder="Eg: 5%"
						className="formInput"
						onChange={marginChangeHandler}/>
			</label>

			</form>
			</Tooltip>
	);
}


export default MarginForm;