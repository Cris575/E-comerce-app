import { useState, useCallback } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { wishlistCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { Layout } from "../../../layouts";
import { LoadingScreen } from "../../../components/Shared";
import { WishlistList } from "../../../components/Wishlist";
import { forEach, size } from "lodash";
import { styles } from "./WishlistScreen.styles";

export function WhislistScreen() {
  const [products, setProducts] = useState(null);
  const [relod, setRelod] = useState(false);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      getProductWishlist();
    }, [relod])
  );

  const onReload = () => setRelod((prevSate) => !prevSate);

  const getProductWishlist = async () => {
    try {
      const response = await wishlistCtrl.getAllProducts(user.id);

      const productTemp = [];
      forEach(response.data, (item) => {
        productTemp.push(item.attributes.product);
      });
      setProducts(productTemp);
    } catch (error) {
      Toast.show("Error la obtener productos", {
        position: Toast.positions.CENTER,
      });
    }
  };
  return (
    <Layout.Basic>
      {!products ? (
        <LoadingScreen text="Cragando lista" />
      ) : size(products) === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de favoritos</Text>
          <Text>No tiene ningun producto en tu lista</Text>
        </View>
      ) : (
        <WishlistList title="Lista de deseos" products={products} onReload={onReload} />
      )}
    </Layout.Basic>
  );
}
