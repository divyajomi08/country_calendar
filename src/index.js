import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./component/Search";
import Timelineform from "./component/Timelineform";

const App=()=>{
  return(<div><div
    style={{
      backgroundColor: 'grey',
      
    }}><Search/></div><Timelineform/></div>);
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
