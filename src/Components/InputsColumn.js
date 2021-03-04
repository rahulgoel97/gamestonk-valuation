import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import RevenueForm from './RevenueForm.js';
import MarginForm from './MarginForm.js';
import EfficiencyForm from './EfficiencyForm.js';
import RiskForm from './RiskForm.js';



const InputsColumn = ({rev, setRev, revGrowth, setRevGrowth, opMargin,setOpMargin, capEfficiency,setCapEfficiency,risk, setRisk}) =>{
		return (
		<div className="inputsColumn">
		
		  <RevenueForm rev = {rev} setRev = {setRev} revGrowth = {revGrowth} setRevGrowth={setRevGrowth} />
		 
	      <MarginForm opMargin={opMargin} setOpMargin={setOpMargin}/>
	      <EfficiencyForm capEfficiency={capEfficiency} setCapEfficiency={setCapEfficiency}/>
	      <RiskForm risk={risk} setRisk={setRisk}/>
	     
      </div>
	);
}


export default InputsColumn;