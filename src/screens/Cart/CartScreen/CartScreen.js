import { View, Text } from "react-native";
import { productControl } from "../../../api";
import { styles } from "./CartScreen.styles";
import { useCart } from "../../../hooks";
import { Layout } from "../../../layouts";
import { LoadingScreen, Search } from "../../../components/Shared";
import { Cart } from "../../../components/Cart";
import { useState, useEffect } from "react";
import { fn } from "../../../utils";
import { size, map } from "lodash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function CartScreen() {
  const [products, setProducts] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const { cart } = useCart();

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
      {!products ? (
        <LoadingScreen text="Cargando carrito" />
      ) : size(products) === 0 ? (
        <>
          <Search.Input />
          <Cart.Empty />
        </>
      ) : (
        <KeyboardAwareScrollView extraScrollHeight={25}>
          <View style={styles.container}>
            <Cart.ProductList products={products} />
            <Text>Direcciónes</Text>
            <Text>Pago...</Text>
          </View>
        </KeyboardAwareScrollView>
      )}
    </Layout.Cart>
  );
}
