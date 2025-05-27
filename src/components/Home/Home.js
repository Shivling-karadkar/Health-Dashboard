import React from 'react'
import Siderbar from '../Siderbar/Siderbar'
import DashboardMainContent from '../DashboardMainContent/DashboardMainContent'
function Home() {
  return (
    <div className="home d-flex">
        <Siderbar/>
        <DashboardMainContent/>
    </div>
  )
}

export default Home
