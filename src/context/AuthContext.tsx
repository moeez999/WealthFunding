import { createContext, ReactNode, useEffect, useState } from "react";
<<<<<<< HEAD
=======
import useFetchAccount from "../hooks/useFetchAccount";
>>>>>>> c67819895851abfaa99dd6586dd7bb07205d71bd

interface AuthContextProps {
  children: ReactNode;
}

export interface AuthContextValue {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  account: object;
  setValueAccount: (value: object) => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
  const [account, setAccount] = useState<object>({});

  const login = () => {
    console.log("Logging in...");
    setLoggedIn(true);
  };

  const logout = () => {
    console.log("Logging out...");
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("islogin");
    localStorage.removeItem("user");
  };
  
  const setValueAccount = (value: object) => {
    setAccount(value);
  };
  
  const contextValue: AuthContextValue = {
    isLoggedIn,
    login,
    logout,
    account,
    setValueAccount,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
