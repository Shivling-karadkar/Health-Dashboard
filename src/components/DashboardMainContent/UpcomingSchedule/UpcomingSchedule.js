import React from 'react'
import UpcomingBox from '../UpcomingBox/UpcomingBox'
export default function UpcomingSchedule() {
  return (
    <>
    <div className="part2-1">   
            <div className='schedule d-flex'>
            <h5>The Coming Schedule</h5>
            
            </div>
            
            <div className="b d-flex gap-2">
                <p>Day</p>
                <UpcomingBox/>
                <UpcomingBox/>
                <UpcomingBox/>
            </div>
            <div className="bo d-flex gap-2">
                <p>Day</p>
                <UpcomingBox/>
                <UpcomingBox/>
                
            </div>
    
      </div>

</>
  )
}
