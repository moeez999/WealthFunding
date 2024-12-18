import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

export interface AuthContextValue {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(true);

  const login = () => {
    console.log("Logging in...");
    setLoggedIn(true);
  };

  const logout = () => {
    console.log("Logging out...");
    setLoggedIn(false);
  };

  const contextValue: AuthContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
