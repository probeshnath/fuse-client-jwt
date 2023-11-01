import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

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