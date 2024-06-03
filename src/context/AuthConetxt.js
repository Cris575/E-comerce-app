import { useState, useEffect, createContext } from "react";
import { storageCtrl } from "../api";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  useEffect(() => {
    recoverySession();
  }, []);

  const recoverySession = async () => {
    const token = await storageCtrl.getToken();
    console.log("TOKEN -->", token);
  };

  const login = async (token) => {
    try {
      await storageCtrl.setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const data = {
    user: null,
    login,
    logout: () => console.log("LOGOUT"),
    updateUser: () => console.log("UPDATE_USER"),
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
