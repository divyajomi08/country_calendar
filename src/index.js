import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Search from "./component/Search";
import Timelineform from "./component/Timelineform";

const App = () => {
  const [countryname,setCountryname]=useState("");
  
  const valuePassing = (country) => {
    setCountryname(country);
    console.log(country);
  };
 
  return (
  <div className="ui container" > <br></br><br></br>  
      <Search searchword={valuePassing} />    
      <Timelineform country={countryname} />
  </div>);
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
