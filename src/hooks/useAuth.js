import { useContext } from "react";
import { AuthContext } from "../context/AuthConetxt";

export const useAuth = () => useContext(AuthContext);
