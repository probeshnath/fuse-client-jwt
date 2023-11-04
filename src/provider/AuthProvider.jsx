import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // console.log("usr", user)

  const googleProvider = new GoogleAuthProvider();

  // google login by firebase
  const handleGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  // register user by firebase
  const register = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login user by firebase
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout user
  const logoutUser = () => {
    setLoading(true)
    return signOut(auth)
  }


  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
     
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)

        // const userEmail = currentUser?.email || user?.email;
        // const loggedUser = {email: userEmail}

        // console.log(" loggeg user", loggedUser)

        // if(currentUser){
        //   axios.post("http://localhost:5000/jwt", loggedUser,{withCredentials:true})
        //   .then((res)=>{
        //     console.log("tokken from",res.data)
        // })
        // .catch((error)=>{
        //   console.log(error)
        // })
        //   fetch("http://localhost:5000/jwt",{
        //     method:"POST",
        //     headers:{
        //      'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(loggedUser)
        //   })
        //   .then((res)=>{console.log(res)})
        //   .catch((err)=>{
        //     console.log(err)
        //   })
        // }else{
        //   console.log("fail to token")
        // }
      
    })
    return () => {
      unSubscribe()
    }
    
  }, [])
  
  
  
  const authInfo = {
    name: "probesh User's",
    register,
    login,
    handleGoogle,
    logoutUser,
    user
  }
  
  
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;