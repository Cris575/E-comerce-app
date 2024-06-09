import { View, Text } from "react-native";
import { productControl } from "../../../api";
import { styles } from "./CartScreen.styles";
import { useCart } from "../../../hooks";
import { Layout } from "../../../layouts";
import { useState, useEffect } from "react";
import { fn } from "../../../utils";

export function CartScreen() {
  const [products, setProducts] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const { cart } = useCart();

  console.log(totalPayment);

  useEffect(() => {
    getProducts();
  }, [cart]);

  const getProducts = async () => {
    const productTemp = [];
    let totalPaymentTemp = 0;

    for await (const item of cart) {
      const response = await productControl.getById(item.id);
      const data = response.data.attributes;

      productTemp.push({ ...data, ...item });

      const priceProduct = fn.calcPrice(data.price, data.discount);
      totalPaymentTemp += priceProduct * item.quatity;
    }

    setProducts(productTemp);
    setTotalPayment(totalPaymentTemp);
  };

  return (
    <Layout.Cart>
      <Text>CartScreen</Text>
    </Layout.Cart>
  );
}
