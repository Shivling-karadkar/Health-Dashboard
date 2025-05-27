import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
export default function Profile() {

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
   <div className="hearderRightContent d-flex">
      <div className="profile">
       
        
                <Button className="fade-button" aria-controls={open ? 'fade-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                    <FaUserCircle />
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My dashoard</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
           

      </div>

      <div className="Add">
          <MdAddBox />

      </div>
   </div>
    

   </>
  )
}
