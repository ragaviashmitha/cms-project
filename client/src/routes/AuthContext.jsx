import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("cmsCurrentUser");
    if (savedUser) {
      setUser(savedUser);
      setIsAuth(true);
    }
  }, []);

  const login = (username) => {
    setUser(username);
    setIsAuth(true);
    localStorage.setItem("cmsCurrentUser", username);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem("cmsCurrentUser");
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
