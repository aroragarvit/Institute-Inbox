import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase.jsx";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed.");
      setUser(user);
      setIsLoadingUser(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!isLoadingUser && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
