import { useState, useEffect, createContext } from "react";
import { storageCtrl, userCtrl } from "../api";
import { fn } from "../utils";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recoverySession();
  }, []);

  const recoverySession = async () => {
    const token = await storageCtrl.getToken();

    if (!token) {
      logout();
      setLoading(false);
      return;
    }

    if (fn.hasTokenExpired(token)) {
      logout();
    } else {
      await login(token);
    }
  };

  const login = async (token) => {
    try {
      await storageCtrl.setToken(token);
      const response = await userCtrl.getMe();
      setUser(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    await storageCtrl.removeToken();
    setUser(null);
  };

  const data = {
    user,
    login,
    logout,
    updateUser: () => console.log("UPDATE_USER"),
  };

  if (loading) return null;
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
