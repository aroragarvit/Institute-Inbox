import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase.jsx";
const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
