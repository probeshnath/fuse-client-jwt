import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("first")
        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;

        const user = {email,password}
        // console.log(user)

        fetch("http://localhost:5000/users",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  return (
    <div>
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? <Link to='/login' className='text-blue-800 font-bold'>Login</Link> </p>
      </form>
    </div>
    </div>
  )
}

export default Register