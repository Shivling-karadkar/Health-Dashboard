import React from 'react'
import { TbHistory } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { BiSolidGridAlt } from "react-icons/bi";
import { PiChatCircleDotsDuotone } from "react-icons/pi";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
function Siderbar() {
  return (
    <>
    <div className="ms-0 mt-4 sidebar">
        <div className="conatiner ms-3  ">
          <h6 className='mt-3'>General</h6>
              <div className="items ">
                <ul>
                  <li className='listItem my-3'><BiSolidGridAlt className='listIcon me-2' />Dashboard</li>
                  <li className='listItem my-3'><TbHistory className='me-2'/>History</li>
                  <li className='listItem my-3'><SlCalender className='me-2'/>calender</li>
                  <li className='listItem my-3'><MdOutlineSpeakerNotes className='me-2'/>Appointments</li>
                  <li className='listItem my-3'><MdOutlineAnalytics className='me-2' />statics</li>
                </ul>
              </div>

              <h6 className='mt-5'>Tools</h6>
              <div className="items ">
                <ul>
                  <li className='listItem my-3'><PiChatCircleDotsDuotone className='listIcon me-2' />Dashboard</li>
                  <li className='listItem my-3'><PiPhoneCallDuotone  className='me-2'/>History</li>
                </ul>
              </div>

              <div className="setting ">
                <MdOutlineSettingsSuggest className='seticon' />
                <h4>Settings</h4>
              </div>
        </div>
    </div>
    </>
  )
}

export default Siderbar
          
            
            
             
            
          
