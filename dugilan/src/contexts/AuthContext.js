import React, { useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";
const AuthContext = React.createContext({
  currentUser: null,
  signup: () => {},
  login: () => {},
});
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const signup = async (username, password) => {
    const user = await createUserWithEmailAndPassword(auth, username, password);
    setCurrentUser(user);
    return user;
  };
  const login = async (username, password) => {
    const user = await signInWithEmailAndPassword(auth, username, password);
    setCurrentUser(user);
    return user;
  };
  const logout = async (username, password) => {
    return setTimeout(() => signOut(auth, username, password), 2000);
  };
  const value = {
    signup,
    currentUser,
    login,
    logout,
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
