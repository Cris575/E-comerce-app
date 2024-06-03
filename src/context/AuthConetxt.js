import { useState, useEffect, createContext } from "react";
import { date } from "yup";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;

  const data = {
    user: null,
    login: () => console.log("LOGIN"),
    logout: () => console.log("LOGOUT"),
    updateUser: () => console.log("UPDATE_USER"),
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
