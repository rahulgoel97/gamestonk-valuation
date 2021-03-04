import Title from './Components/Title.js';
import Footer from './Components/Footer.js';
import ValTable from './Components/ValTable.js';
import InputsColumn from './Components/InputsColumn.js';
import Assumptions from './Components/Assumptions.js';

import './Components/App.css';
import React, {useState} from 'react';




function App() {

  // States
  const [rev, setRev] = useState(7334);
  const [revGrowth, setRevGrowth] = useState(0.05);
  const [opMargin, setOpMargin] = useState(0.05);
  const [capEfficiency, setCapEfficiency] = useState(4);
  const [risk, setRisk] = useState(0.07);
  const [equityValue, setEquityValue] = useState(0);

  return (
    <div className="App">
    
    

  
      
      <div className="container-fluid">



           <Title/> 


           


        <div className="row">
          <div className="col-4"> <InputsColumn 
                                  rev = {rev}
                                  setRev = {setRev}
                                  revGrowth = {revGrowth}
                                  setRevGrowth={setRevGrowth}
                                  opMargin = {opMargin}
                                  setOpMargin={setOpMargin}
                                  capEfficiency={capEfficiency}
                                  setCapEfficiency={setCapEfficiency}
                                  risk={risk}
                                  setRisk={setRisk}/> </div>

          <div className="col-8"> <div className = "valTable"><ValTable rev = {rev} revGrowth={revGrowth} opMargin = {opMargin} capEfficiency={capEfficiency} risk={risk} setEquityValue={setEquityValue}/></div> </div>
        </div>

        <div className="row">
          <div className="col-12"> <Assumptions /> </div>
          
        </div>

      </div>
    

      
     <Footer/>
        
   
    </div>
  );
}

export default App;
