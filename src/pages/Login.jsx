import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Login = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault()
    console.log("first")
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;

    const user = {email,password}
    // console.log(user)

    // firebase register
    login(email,password)
    .then(result => {
      console.log(result.user)
      navigate("/")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't have an account? <Link to='/register' className='text-blue-800 font-bold' >Register</Link> </p>
      </form>
    </div>
    </div>
  )
}

export default Login