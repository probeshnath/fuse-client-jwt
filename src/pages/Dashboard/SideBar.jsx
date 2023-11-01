import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-orange-100 py-3 px-2'>
        <ul className='flex flex-col gap-3'>
            <li><Link to="/dashboard/all" >All</Link></li>
            <li><Link to="/dashboard/products" >All Products</Link></li>
            <li><Link to="/dashboard/addproduct" >Add Products</Link></li>
            <li><Link to="/dashboard/users" >Users</Link></li>
            <li><Link to="/dashboard/updateproduct" >Update</Link></li>
            {/* <li><Link to="/dashboard/" ></Link></li> */}
        </ul>
    </div>
  )
}

export default SideBar