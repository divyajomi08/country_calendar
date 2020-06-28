import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

 

const Timelineform =()=>{
    return (
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">JANUARY 1ST</h3>
    <h4 className="vertical-timeline-element-subtitle">NEW YEAR</h4>
    <p>
      Welcomes the new year with lantern.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 70, 0)' }}
    iconStyle={{ background: 'rgb(0, 70, 0)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">JANUARY 30TH</h3>
    <h4 className="vertical-timeline-element-subtitle">GANDHI JAYANTHI</h4>
    <p>
      The deathday of father of the nation.
    </p>
  </VerticalTimelineElement>
 
</VerticalTimeline>
    );
};
export default Timelineform;