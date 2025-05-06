import { createContext, useEffect, useState } from "react";
import auth from "../../Config/firebase.config";
import PropTypes from "prop-types";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email;
      // const loggedUser = { email: userEmail };

      console.log("Current value of the user", currentUser);
      setUser(currentUser);

      if (currentUser?.email) {
        const userEmail = { email: currentUser?.email };
        axios
          .post("https://b9a11-server-side-amit44777.vercel.app/jwt", userEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("Login token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://b9a11-server-side-amit44777.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("Logout", res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    googleLogin,
    gitHubLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
