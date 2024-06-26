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

  const increaseProduct = async (productId) => {
    try {
      await cartCtrl.increaseProduct(productId);
      onReload();
    } catch (error) {
      throw error;
    }
  };

  const decreaseProduct = async (productId) => {
    try {
      await cartCtrl.decreaseProduct(productId);
      onReload();
    } catch (error) {
      throw error;
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await cartCtrl.delete(productId);
      onReload();
    } catch (error) {
      throw error;
    }
  };

  const emptyCrad = async () => {
    try {
      await cartCtrl.deleteAll();
      onReload();
    } catch (error) {
      throw error;
    }
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
