import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Title extends React.Component{
	render(){
		return (
			<div className="title">
			<h1 className="gs"> Gamestonk </h1>
			<h1 className="val"> Valuation </h1>
			</div>
	);
	}
}

export default Title;