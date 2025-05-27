import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import body from "C:\\Users\\Asus\\OneDrive\\Desktop\\healthcare\\src\\assets\\images\\body.jpg";
import Boxs from './Boxs/Boxs';
import { BsLungsFill } from "react-icons/bs";
import { BiSolidBone } from "react-icons/bi";
import { LiaTeethSolid } from "react-icons/lia";
import WeeklyActivityChart from './WeeklyActivityChart/WeeklyActivityChart';
import BasicDateRangeCalendar from "./BasicDateRangeCalendar/BasicDateRangeCalendar";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";



function DashboardMainContent() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <div className="mainComponent ">

      <div className="part1 ">
            <div className="dashboard">
                <h3>Dashboard</h3>

                <Button className="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                    This Week
                </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>check Ups</MenuItem>
            <MenuItem onClick={handleClose}>My Appointment</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
            </div>
            </div>


            <div className="body ">
              <img className="img ms-5 "src={body} alt="" />
              <div className="content ">
                <Boxs  name="Lungs" icon={<BsLungsFill />}/>
                <Boxs name="Teeth" icon={<LiaTeethSolid />}/>
                <Boxs  name="Bone"icon={<BiSolidBone />}/>
              </div>
            </div>
          
         
            <div className="ActivityContent">
              <WeeklyActivityChart/>
            </div>
    </div>
              
    <div className="mainComponentpart2 ">
      <div className="calen  ">
        <div className='Basic ms-5 mt-2'>
        <BasicDateRangeCalendar />
        </div>

       <div className="calco d-flex ms-5">
             <div className="calenContent ">
                <div className='cc mt-3'>
                  <h5 className='mt-3 mb-1'>Dentist</h5>
                  <p className='mb-1'>Time : 11:00 am</p>
                  <h6 className='mb-0'>Dr.Suryavanshi</h6>
                </div>
              </div>

              <div className="calenContent ">
                <div className='cc mt-3'>
                  <h5 className='mt-3 mb-1'>Dentist</h5>
                  <p className='mb-1'>Time : 11:00 am</p>
                  <h6 className='mb-0'>Dr.Suryavanshi</h6>
                </div>
              </div>

       </div>
        <div className="calco d-flex ms-5">
             <div className="calenContent ">
                <div className='cc mt-3'>
                  <h5 className='mt-3 mb-1'>Dentist</h5>
                  <p className='mb-1'>Time : 11:00 am</p>
                  <h6 className='mb-0'>Dr.Suryavanshi</h6>
                </div>
              </div>

              <div className="calenContent ">
                <div className='cc mt-3'>
                  <h5 className='mt-3 mb-1'>Dentist</h5>
                  <p className='mb-1'>Time : 11:00 am</p>
                  <h6 className='mb-0'>Dr.Suryavanshi</h6>
                </div>
              </div>

       </div>


        <div className="upcomeingschedule">
        <UpcomingSchedule/>
      </div>
      </div>

      
      </div>

        
           

        
    </>
  )
}

export default DashboardMainContent
