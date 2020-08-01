import React, {useState,useEffect} from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import axios from "axios";

const Timelineform = (props) => {
  const countryname = props.country;
  const [festival,setData]=useState([]);
  const colour = ['rgb(33, 150, 243)', 'rgb(0, 150, 0)'];

  const handleget = async()=>{
    const festival =await axios.get("http://localhost:4063/festival");
    setData(festival.data);
    console.log(festival);
  };
  useEffect(()=>{handleget()},[]);
  const filtervalue = festival.filter((item) =>(item._country === countryname));
  const setColour = (index) => (index % 2 == 0) ? colour[0] : colour[1];
  return (
    <VerticalTimeline >
      {filtervalue.map((item, index) => <VerticalTimelineElement
        key={item._id}
        className="vertical-timeline-element--work"
        contentStyle={{ background: setColour(index), color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid ${setColour(index)}` }}
        iconStyle={{ background: setColour(index), color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">{`${item._title}`}</h3>
        <h4 className="vertical-timeline-element-subtitle">{`${item._month} ${item._date ? item._date : ""  } `}</h4>
        <p>
          {`${item._description}`}
        </p>
      </VerticalTimelineElement>)}
    </VerticalTimeline>
  );
};
export default Timelineform;