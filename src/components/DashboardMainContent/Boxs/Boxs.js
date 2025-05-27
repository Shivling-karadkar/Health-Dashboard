import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


import React from 'react'

function Boxs({name,icon}) {
  return (
    <div className="boxc">
        <h5 >{icon} {name}</h5>
        <p >Date : 25 may 2025</p>
      <Box sx={{ width: 100 }} >
        <Slider className="line " defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>
     
    </div>
             
  )
}

export default Boxs;

