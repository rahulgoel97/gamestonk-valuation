import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Assumptions extends React.Component{



	render(){
		return (
			<div>
				
				<div className="assumptions">
				
					<h1 className="assumptionsTitle"> Notes & Assumptions </h1>

						<p className="assumptionBubbleYF">

							<a href="https://finance.yahoo.com/quote/GME/financials?p=GME" target="_blank" rel="noopener noreferrer">
							
							Visit $GME's Yahoo Finance for data
				        	
				        	</a> 
				        </p>
				         <p class="assumptionBubble">Illustrative & simplified - This is not investment advice </p> 
						 <p class="assumptionBubble">Terminal growth rate is 1% </p> 
						 <p class="assumptionBubble"> Tax rate is 21% </p> 
						 <p class="assumptionBubble">69.75M Shares Outstanding</p> 
						 <p class="assumptionBubble">Revenue growth rate applies year 1 through year 10</p> 
						 <p class="assumptionBubble">Probability of bankruptcy is 0% </p> 
						 <p class="assumptionBubble">Doesn't factor cash, minority interests or equity options </p> 
						 <p class="assumptionBubble">Doesn't factor Net Operating Loss (NOL) carried forward </p>

					</div>
				
			</div>
	);
	}
}

export default Assumptions;