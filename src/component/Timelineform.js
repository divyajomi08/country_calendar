import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timelineform = (props) => {
  const countryname = props.country;
  const colour = ['rgb(33, 150, 243)', 'rgb(0, 150, 0)'];
  const festival = [{ country: ["india"], name: "new year", id: "1", description: "Welcomes the new year with lantern.", date: "1", month: "january" },
  { country: ["usa"], name: "independance day", id: "2", description: "day of independance", date: "4", month: "july" },
  { country: ["pakistan", "india"], id: "3", name: "independence day", description: "day of freedom.", date: "15", month: "august" }];
  const filtervalue = festival.filter((item) =>(item.country.includes(countryname)));
  const setColour = (index) => (index % 2 == 0) ? colour[0] : colour[1];
  return (
    <VerticalTimeline >
      {filtervalue.map((item, index) => <VerticalTimelineElement
        key={item.id}
        className="vertical-timeline-element--work"
        contentStyle={{ background: setColour(index), color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid ${setColour(index)}` }}
        iconStyle={{ background: setColour(index), color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">{`${item.month} ${item.date} `}</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          {`${item.description}`}
        </p>
      </VerticalTimelineElement>)}
    </VerticalTimeline>
  );
};
export default Timelineform;