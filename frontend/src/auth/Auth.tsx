import { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextType } from "@/constants/types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (_user: any) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (user: any) => {
    setUser(user);
    navigate("home", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
