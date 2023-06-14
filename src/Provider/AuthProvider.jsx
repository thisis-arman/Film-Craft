import { createContext, useEffect, useState } from "react";
import axios from "axios";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    //console.log('geting from signin', email, password)
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    //console.log('authProvider ', name, photo);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      //console.log("logged in user inside the auth state observer", loggedUser);
      setUser(loggedUser);


      if(loggedUser){
        axios.post('https://film-craft-server.vercel.app/jwt',{email:loggedUser.email})
        .then(data =>{
          console.log(data)
          localStorage.setItem('access_token', data.data.token)
          setLoading(false)
        })
      }
      else{
        localStorage.removeItem('access_token')
      }


     
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const AuthInfo = {
    user,
    createUser,
    loading,
    signIn,
    updateUserProfile,
    handleGoogleLogin,
    logOut

  }

  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;





























/* import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = ( email, password) => {
    //console.log(email,password)
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = ( email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      //console.log("logged in user inside the auth state observer", loggedUser);
      setUser(loggedUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    handleGoogleLogin,
    updateUserProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider; */