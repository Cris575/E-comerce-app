import { useContext } from "react";
import { CarContext } from "../context";

export const useCart = () => useContext(CarContext);
