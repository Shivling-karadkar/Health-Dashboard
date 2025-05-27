import React from 'react';
import Button from '@mui/material/Button';

export default function HeaderSearch() {
  return (
    <>
    <div className="headerSearch ms-3 me-3">
        
       {/* <div className="search">
        
        <input
          type="text"
          className="input "
          placeholder="Search for products"
        /> */}
        {/* <span className="icon">
          <BsSearch />
        </span> */}
       {/* </div> */}




       <div class="search-container">
    <input type="text" placeholder="Search..." className="search-input" />

    <span className="search-icon"><Button>&#128269;</Button></span>
  </div>

    </div>
</>
  );
}
