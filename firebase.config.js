// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXe4wd9846yV0xjET7BkCn6TY51M1SN54",
  authDomain: "fuse-mern-app.firebaseapp.com",
  projectId: "fuse-mern-app",
  storageBucket: "fuse-mern-app.appspot.com",
  messagingSenderId: "736417108105",
  appId: "1:736417108105:web:c637399ed0856ee3ac3658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;