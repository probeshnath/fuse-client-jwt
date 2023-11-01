import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { AuthContext } from '../provider/AuthProvider'

const Home = () => {
  const {name} = useContext(AuthContext)
  // console.log(name)
  return (
    <div>
    
        <h1>this is home page</h1>
    </div>
  )
}

export default Home