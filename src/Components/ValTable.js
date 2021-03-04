import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';

const cheerio = require('cheerio');
const axios = require('axios');


// If you are reading this, I hope you will forgive for the painful inefficiency in which this is written
// I am an impatient novice!
// I am hoping that no one will read this, ever, risking embarrassment 

const ValTable = ({rev, revGrowth, opMargin, capEfficiency, risk, setEquityValue}) =>{

		const useStyles = makeStyles({
	  table: {
	    minWidth: 450,
	  },
	});


	function scrapeRevenue(){
		axios.get('https://cors-anywhere.herokuapp.com/'+'https://finance.yahoo.com/quote/GME/financials?p=GME')
		.then((response)=>{
			const html = response.data;
			const $ = cheerio.load(html);
			let title = $('div[class="Ta(c) Py(6px) Bxz(bb) BdB Bdc($seperatorColor) Miw(120px) Miw(140px)--pnclg Bgc($lv1BgColor) fi-row:h_Bgc($hoverBgColor) D(tbc)"] > span').text();
			const scrapedRevenue = parseInt((title.substring(0,9)).replaceAll(',',''));
			console.log('val is', scrapedRevenue);
		});	
	}

	function createData(label, y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, yt) {
	  return { label, y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, yt };
	}

	function createRevenue(initialRevenue, growthRate) {
		var revenueCalcs = {};

		if(typeof(growthRate)=="string" &&  growthRate.includes("%")){
			growthRate = 1+(parseFloat(growthRate)/100);
			console.log(growthRate);
					}
		else{
			growthRate = 1+parseFloat(growthRate);
		}

		
		revenueCalcs.label = 'Revenue';
		revenueCalcs.y1 = Math.round(initialRevenue*(growthRate**0));
		revenueCalcs.y2 = Math.round(initialRevenue*(growthRate**1));
		revenueCalcs.y3 = Math.round(initialRevenue*(growthRate**2));
		revenueCalcs.y4 = Math.round(initialRevenue*(growthRate**3));
		revenueCalcs.y5 = Math.round(initialRevenue*(growthRate**4));
		revenueCalcs.y6 = Math.round(initialRevenue*(growthRate**5));
		revenueCalcs.y7 = Math.round(initialRevenue*(growthRate**6));
		revenueCalcs.y8 = Math.round(initialRevenue*(growthRate**7));
		revenueCalcs.y9 = Math.round(initialRevenue*(growthRate**8));
		revenueCalcs.y10 = Math.round(initialRevenue*(growthRate**9));
		revenueCalcs.yt = Math.round(initialRevenue*(growthRate**10));


		return revenueCalcs;
	}


	function createOperatingInc(initialRevenue, growthRate, opMargin) {


		// Handle percentage values for growth rate
		if(typeof(growthRate)=="string" &&  growthRate.includes("%")){
			growthRate = 1+(parseFloat(growthRate)/100);
		}
		else{
			growthRate = 1+parseFloat(growthRate);
		}


		// Handle percentage values for Operating Margin
		if(typeof(opMargin)=="string" &&  opMargin.includes("%")){
			opMargin = (parseFloat(opMargin)/100);
		}	
		else{
			opMargin = parseFloat(opMargin);
		}
		
		var opIncCalcs = {};
		
		opIncCalcs.label = 'OM';
		opIncCalcs.y1 = Math.round(initialRevenue*(growthRate**0)*opMargin);
		opIncCalcs.y2 = Math.round(initialRevenue*(growthRate**1)*opMargin);
		opIncCalcs.y3 = Math.round(initialRevenue*(growthRate**2)*opMargin);
		opIncCalcs.y4 = Math.round(initialRevenue*(growthRate**3)*opMargin);
		opIncCalcs.y5 = Math.round(initialRevenue*(growthRate**4)*opMargin);
		opIncCalcs.y6 = Math.round(initialRevenue*(growthRate**5)*opMargin);
		opIncCalcs.y7 = Math.round(initialRevenue*(growthRate**6)*opMargin);
		opIncCalcs.y8 = Math.round(initialRevenue*(growthRate**7)*opMargin);
		opIncCalcs.y9 = Math.round(initialRevenue*(growthRate**8)*opMargin);
		opIncCalcs.y10 = Math.round(initialRevenue*(growthRate**9)*opMargin);
		opIncCalcs.yt = Math.round(initialRevenue*(growthRate**10)*opMargin);


		return opIncCalcs;
	}

	function createTax(initialRevenue, growthRate, opMargin, taxRate) {
		
		var taxVals = {};

		// Handle percentage values for growth rate
		if(typeof(growthRate)=="string" &&  growthRate.includes("%")){
			growthRate = 1+(parseFloat(growthRate)/100);
		}
		else{
			growthRate = 1+parseFloat(growthRate);
		}


		// Handle percentage values for Operating Margin
		if(typeof(opMargin)=="string" &&  opMargin.includes("%")){
			opMargin = (parseFloat(opMargin)/100);
		}	
		else{
			opMargin = parseFloat(opMargin);
		}

		taxVals.label = 'Taxes';
		taxVals.y1 = Math.round(initialRevenue*(growthRate**0)*opMargin*taxRate);
		taxVals.y2 = Math.round(initialRevenue*(growthRate**1)*opMargin*taxRate);
		taxVals.y3 = Math.round(initialRevenue*(growthRate**2)*opMargin*taxRate);
		taxVals.y4 = Math.round(initialRevenue*(growthRate**3)*opMargin*taxRate);
		taxVals.y5 = Math.round(initialRevenue*(growthRate**4)*opMargin*taxRate);
		taxVals.y6 = Math.round(initialRevenue*(growthRate**5)*opMargin*taxRate);
		taxVals.y7 = Math.round(initialRevenue*(growthRate**6)*opMargin*taxRate);
		taxVals.y8 = Math.round(initialRevenue*(growthRate**7)*opMargin*taxRate);
		taxVals.y9 = Math.round(initialRevenue*(growthRate**8)*opMargin*taxRate);
		taxVals.y10 = Math.round(initialRevenue*(growthRate**9)*opMargin*taxRate);
		taxVals.yt = Math.round(initialRevenue*(growthRate**10)*opMargin*taxRate);


		return taxVals;
	}

	function afterTaxIncome(initialRevenue, growthRate, opMargin, taxRate) {
		
		var afterTaxVals = {};
		taxRate = 1-taxRate;
		
		// Handle percentage values for growth rate
		if(typeof(growthRate)=="string" &&  growthRate.includes("%")){
			growthRate = 1+(parseFloat(growthRate)/100);
		}
		else{
			growthRate = 1+parseFloat(growthRate);
		}

		// Handle percentage values for Operating Margin
		if(typeof(opMargin)=="string" &&  opMargin.includes("%")){
			opMargin = (parseFloat(opMargin)/100);
		}	
		else{
			opMargin = parseFloat(opMargin);
		}

		afterTaxVals.label = 'After Taxes';
		afterTaxVals.y1 = Math.round(initialRevenue*(growthRate**0)*opMargin*taxRate);
		afterTaxVals.y2 = Math.round(initialRevenue*(growthRate**1)*opMargin*taxRate);
		afterTaxVals.y3 = Math.round(initialRevenue*(growthRate**2)*opMargin*taxRate);
		afterTaxVals.y4 = Math.round(initialRevenue*(growthRate**3)*opMargin*taxRate);
		afterTaxVals.y5 = Math.round(initialRevenue*(growthRate**4)*opMargin*taxRate);
		afterTaxVals.y6 = Math.round(initialRevenue*(growthRate**5)*opMargin*taxRate);
		afterTaxVals.y7 = Math.round(initialRevenue*(growthRate**6)*opMargin*taxRate);
		afterTaxVals.y8 = Math.round(initialRevenue*(growthRate**7)*opMargin*taxRate);
		afterTaxVals.y9 = Math.round(initialRevenue*(growthRate**8)*opMargin*taxRate);
		afterTaxVals.y10 = Math.round(initialRevenue*(growthRate**9)*opMargin*taxRate);
		afterTaxVals.yt = Math.round(initialRevenue*(growthRate**10)*opMargin*taxRate);


		return afterTaxVals;
	}

	function reinv(revenueObj, capEfficiency ){

	var reinv = {};
	
	
		reinv.label = 'Reinvestment';
		reinv.y1=0;
		reinv.y2 = Math.round((revenueObj.y2-revenueObj.y1)/capEfficiency);
		reinv.y3 = Math.round((revenueObj.y3-revenueObj.y2)/capEfficiency);
		reinv.y4 = Math.round((revenueObj.y4-revenueObj.y3)/capEfficiency);
		reinv.y5 = Math.round((revenueObj.y5-revenueObj.y4)/capEfficiency);
		reinv.y6 = Math.round((revenueObj.y6-revenueObj.y5)/capEfficiency);
		reinv.y7 = Math.round((revenueObj.y7-revenueObj.y6)/capEfficiency);
		reinv.y8 = Math.round((revenueObj.y8-revenueObj.y7)/capEfficiency);
		reinv.y9 = Math.round((revenueObj.y9-revenueObj.y8)/capEfficiency);
		reinv.y10 =Math.round((revenueObj.y10-revenueObj.y9)/capEfficiency);
		reinv.yt = Math.round((revenueObj.yt-revenueObj.y10)/capEfficiency);
		return reinv;	
	}

	function freeCashFlow(afterTaxIncome, reinv){
		var fcff = {};

		fcff.label='Free Cash Flow';
		fcff.y1 = Math.round(afterTaxIncome.y1-reinv.y1);
		fcff.y2 = Math.round(afterTaxIncome.y2-reinv.y2);
		fcff.y3 = Math.round(afterTaxIncome.y3-reinv.y3);
		fcff.y4 = Math.round(afterTaxIncome.y4-reinv.y4);
		fcff.y5 = Math.round(afterTaxIncome.y5-reinv.y5);
		fcff.y6 = Math.round(afterTaxIncome.y6-reinv.y6);
		fcff.y7 = Math.round(afterTaxIncome.y7-reinv.y7);
		fcff.y8 = Math.round(afterTaxIncome.y8-reinv.y8);
		fcff.y9 = Math.round(afterTaxIncome.y9-reinv.y9);
		fcff.y10 = Math.round(afterTaxIncome.y10-reinv.y10);
		fcff.yt = Math.round(afterTaxIncome.yt-reinv.yt);

		return fcff;
	}



	function PV(fcff, discRate){

		const PV = {};


		// Handle percentage values for discount rate
		if(typeof(discRate)=="string" &&  discRate.includes("%")){
			discRate = 1+(parseFloat(discRate)/100);
		}
		else{
			discRate = 1+parseFloat(discRate);
		}


		

		PV.label="PV";
		PV.y1 = Math.round((fcff.y1)/(discRate));
		PV.y2 = Math.round((fcff.y2)/(discRate**2));
		PV.y3 = Math.round((fcff.y3)/(discRate**3));
		PV.y4 = Math.round((fcff.y4)/(discRate**4));
		PV.y5 = Math.round((fcff.y5)/(discRate**5));
		PV.y6 = Math.round((fcff.y6)/(discRate**6));
		PV.y7 = Math.round((fcff.y7)/(discRate**7));
		PV.y8 = Math.round((fcff.y8)/(discRate**8));
		PV.y9 = Math.round((fcff.y9)/(discRate**9));
		PV.y10 = Math.round((fcff.y10)/(discRate**10));

		// Need to calculate discount factor for terminal year using year 10
		

		PV.yt = Math.round(((fcff.yt)/(discRate-1-0.01))/(discRate**10)); // Hard coded terminal growth rate @ 1%

		return PV;
	}

	function equityValue(obj) {
		
		return Math.round(obj.y1+obj.y2+obj.y3+obj.y4+obj.y5+obj.y6+obj.y7+obj.y8+obj.y9+obj.y10+obj.yt);
  		
}

	// Create objects for the table rows
	
	const initialRevenue = rev;
	const revenueValuesObject = createRevenue(initialRevenue, revGrowth);
	const afterTaxIncomeObject = afterTaxIncome(initialRevenue, revGrowth, opMargin, 0.21);
	const reinvObject = reinv(revenueValuesObject,capEfficiency);
	const FCFFObject = freeCashFlow(afterTaxIncomeObject, reinvObject);
	const PVObject = PV(FCFFObject, risk);
	const value = equityValue(PVObject);

	const rows = [
	  revenueValuesObject,
	  createOperatingInc(initialRevenue, revGrowth, opMargin),
	  createTax(initialRevenue, revGrowth, opMargin, 0.21),
	  afterTaxIncomeObject,
	  reinvObject,
	  FCFFObject,
	  PVObject,
	 
	];

	const classes = useStyles();

	const onClickHandler = () =>{
		const value = equityValue(PVObject);
		console.log(value);
	}

	return(
		
		<div>
		
		<div>
		 <TableContainer component={Paper}>
		
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Labels</TableCell>
            <TableCell align="right">Y1</TableCell>
            <TableCell align="right">Y2</TableCell>
            <TableCell align="right">Y3</TableCell>
            <TableCell align="right">Y4</TableCell>
            <TableCell align="right">Y5</TableCell>
            <TableCell align="right">Y6</TableCell>
            <TableCell align="right">Y7</TableCell>
            <TableCell align="right">Y8</TableCell>
            <TableCell align="right">Y9</TableCell>
            <TableCell align="right">Y10</TableCell>
            <TableCell align="right">YT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell align="right">{row.y1}</TableCell>
              <TableCell align="right">{row.y2}</TableCell>
              <TableCell align="right">{row.y3}</TableCell>
              <TableCell align="right">{row.y4}</TableCell>
              <TableCell align="right">{row.y5}</TableCell>
              <TableCell align="right">{row.y6}</TableCell>
              <TableCell align="right">{row.y7}</TableCell>
              <TableCell align="right">{row.y8}</TableCell>
              <TableCell align="right">{row.y9}</TableCell>
              <TableCell align="right">{row.y10}</TableCell>
              <TableCell align="right">{row.yt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="rightBottom">Your value is <strong>${value}M or ${Math.round(value/69.75)} / share</strong></div> 
   </div>
  );
}


export default ValTable;