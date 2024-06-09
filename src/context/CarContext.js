import { useState, useEffect, createContext } from "react";
import { cartCtrl } from "../api";

export const CarContext = createContext();

export function CraProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    retriveCart();
    countTotalCart();
  }, [reload]);

  const onReload = () => setReload((prevState) => !prevState);

  const addCart = async (productId) => {
    try {
      await cartCtrl.add(productId);
      onReload();
    } catch (error) {
      throw error;
    }
  };

  const retriveCart = async () => {
    try {
      const reponse = await cartCtrl.getAll();
      setCart(reponse);
    } catch (error) {
      throw error;
    }
  };

  const countTotalCart = async () => {
    try {
      const response = await cartCtrl.count();
      setTotalProducts(response);
    } catch (error) {
      throw error;
    }
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
