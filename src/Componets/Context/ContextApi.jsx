import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "@firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firbase/Firbase.init";

// authcontext export
export const AuthContext = createContext({});
const ContextApi = ({ children }) => {
  const [User, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //auth with google
  const googleAuth = () => {
    return signInWithPopup(auth, provider);
  };
  // for user login and logout manegment
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  // log in with email and password
  const handleLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //after register login with email password
const LoginUser = (email,password) => {
  return signInWithEmailAndPassword(auth, email, password);
}


  //set user in auth
  const handleName = (UpdatingName) => {
    return updateProfile(auth.currentUser, UpdatingName);
  };

  // logout parpass
  const Handle_Log_Out = () => {
    return signOut(auth);
  };
  const UserInfo = {
    User,
    setUser,
    googleAuth,
    Handle_Log_Out,
    handleLogin,
    LoginUser,
    handleName
  };
  // const users = auth.currentUser;
  // console.log(users);
  return (
    <AuthContext.Provider value={UserInfo}>{children} </AuthContext.Provider>
  );
};

export default ContextApi;
