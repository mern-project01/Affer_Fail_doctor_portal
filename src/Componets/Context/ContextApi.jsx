import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "@firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firbase/Firbase.init";

// authcontext export
export const AuthContext = createContext({});
const ContextApi = ({ children }) => {
  const [User, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const googleAuth = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  const UserInfo = {
    User,
    setUser,
    googleAuth,
  };
  return (
    <AuthContext.Provider value={UserInfo}>{children} </AuthContext.Provider>
  );
};

export default ContextApi;
