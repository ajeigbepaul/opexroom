import { createContext, useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("Auth state chaged", user);
      setAuth(user);
      setInitialized(true);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth, initialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
