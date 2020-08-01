import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Search from "./component/Search";
import Timelineform from "./component/Timelineform";

const App = () => {
  const [countryname,setCountryname]=useState("");
  
  const valuePassing = (country) => {
    setCountryname(country);
  };
 
  return (
  <div>
    <div style={{ backgroundColor: 'grey', }}>
      <Search searchword={valuePassing} />
    </div>
    <Timelineform country={countryname} />
  </div>);
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
