import { useState, useEffect, createContext } from "react";

export const CarContext = createContext();

export function CraProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(10);

  const addCart = () => {
    console.log("ADD cart");
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