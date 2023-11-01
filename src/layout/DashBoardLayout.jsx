import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from '../pages/dashboard/SideBar'

const DashBoardLayout = () => {
  return (
    <div>
        <Navbar />
        <h1>DashBoard</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className='col-span-2'>
            <SideBar />
          </div>
          <div className='col-span-10'>
              <Outlet />
            </div>
        </div>
        
    </div>
  )
}

export default DashBoardLayout