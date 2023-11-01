import React, { createContext } from 'react'
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


  // register user in firebase

  const register = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  }


    const authInfo = {
        name: "probesh User's",
        register
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;