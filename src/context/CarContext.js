import { useState, useEffect, createContext } from "react";
import { cartCtrl } from "../api";

export const CarContext = createContext();

export function CraProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(10);

  const addCart = async (productId) => {
    try {
      await cartCtrl.add(productId);
    } catch (error) {
      throw error;
    }
  };

  const retriveCart = () => {
    console.log("retrivecart");
  };

  const countTotalCart = () => {
    console.log("countTotalCart");
  };

  const increaseProduct = () => {
    console.log("increaseProduct");
  };

  const decreaseProduct = () => {
    console.log("decreaseProduct");
  };

  const deleteProduct = () => {
    console.log("deleteProduct");
  };

  const emptyCrad = () => {
    console.log("emptyCrad");
  };

  const data = {
    cart,
    totalProducts,
    addCart,
    deleteProduct,
    increaseProduct,
    decreaseProduct,
    emptyCrad,
  };

  return <CarContext.Provider value={data}>{children}</CarContext.Provider>;
}
