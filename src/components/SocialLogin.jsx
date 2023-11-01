import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const SocialLogin = () => {

    const {handleGoogle} = useContext(AuthContext)
    const navigate = useNavigate()


    // google login
    const handleGoogleLogin = () =>{
        // console.log("hi")
        handleGoogle()
        .then(result => {
            console.log(result.user)
            navigate("/")
          })
          .catch((err)=>{
            console.log(err)
          })
    }
  return (
    <div className='py-2 text-center'>
        <button onClick={handleGoogleLogin} className='p-1 px-3 bg-orange-500 text-white '>Google</button>
    </div>
  )
}

export default SocialLogin