import { useState, useCallback } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { wishlistCtrl } from "../../../api";
import { useAuth } from "../../../hooks";
import { forEach } from "lodash";

export function WhislistScreen() {
  const [products, setProducts] = useState(null);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      getProductWishlist();
    }, [])
  );

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
    <View>
      <Text>WhislistScreen</Text>
    </View>
  );
}
