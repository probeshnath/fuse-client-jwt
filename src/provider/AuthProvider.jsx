import React, { createContext } from 'react'
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


  // register user by firebase
  const register = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  }

  // login user by firebase
  const login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }


    const authInfo = {
        name: "probesh User's",
        register,
        login
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;