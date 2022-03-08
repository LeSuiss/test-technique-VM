import React from 'react'
import { zoneConvertedTime } from '../utils/timeZones'
import { zone as i_zone } from '../utils/timeZones'

const Timer=(props:{zone:i_zone, timer:string})=> {

  return (
    <div className='card'>
        <span>{props.zone.location}</span>
        <span>{props.zone.label}</span>
        <div className="clock">
          {zoneConvertedTime(props.timer, props.zone)}
        </div>
    </div>
  )
}

export default Timer
