import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
			<p> Made with diamond hands 💎🙌 | Cheers to <a className = "adamodaran" href ="http://pages.stern.nyu.edu/~adamodar/" target="_blank" rel="noopener noreferrer" >Aswath Damodaran </a>for demystifying valuations... for everyone </p>
			</div>
	);
	}
}

export default Footer;