import React from 'react'
import {dataXV} from '../../data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {

  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Itinerario</h3>
      <VerticalTimeline
      lineColor={`${dataXV.time_line.settings.lineColor}`}
      >
        {
          dataXV.time_line.protocol.map(item=>(
            <VerticalTimelineElement
              key=
                {item.id}
              className=
                "vertical-timeline-element--work"
              contentStyle={
                { background: `${dataXV.time_line.settings.bgColor}`,
                  color:`${dataXV.time_line.settings.color}`,
                  marginRight:'10px',
                  boxShadow:'none'}}
              contentArrowStyle={
                { borderRight: `7px solid ${dataXV.time_line.settings.bgColor}`}}
              date=
                {`${item.time}`}
              dateClassName=
                'custom-date-color'
              iconStyle={
                { background: `${dataXV.time_line.settings.bgColor}`, 
                fill: `${dataXV.time_line.settings.bgColor}`,
                boxShadow:`0 0 0 4px ${dataXV.time_line.settings.bgColor}`}} 
              icon={
                <img src={`/icons/${item.icon}.svg`} 
                alt={`ico-${item.icon}`} 
                className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine