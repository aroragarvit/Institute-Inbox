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
      setIsLoadingUser(false); //  as user is not fetched in the beginning and it directly goes to the protected route so we need to wait for the user to be fetched and then go to the protected route so we use this state otherwise it will agarin and again  redirect to the login page
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
