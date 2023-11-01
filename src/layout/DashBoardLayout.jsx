import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DashBoardLayout = () => {
  return (
    <div>
        <Navbar />
        <h1>DashBoardLayout</h1>
        <Outlet />
    </div>
  )
}

export default DashBoardLayout