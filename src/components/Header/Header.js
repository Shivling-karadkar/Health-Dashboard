import React from 'react';

import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

import Profile from './Profile/Profile';





export default function Header() {
  return (
    <>
    <div className="header  ">
        <div className="conatiner col-3 d-flex">
            <Logo />
            <SearchBar/>
            <Profile className="user"/>
            
        </div>
    </div>
    </>
  )
}
