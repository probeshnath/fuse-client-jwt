import React, { createContext } from 'react'
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider();

  // google login by firebase
  const handleGoogle = () =>{
    return signInWithPopup(auth,googleProvider)
  }


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
        login,
        handleGoogle
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;