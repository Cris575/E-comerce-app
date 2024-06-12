import { View, Text } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import Toast from "react-native-root-toast";
import { useAuth } from "../../../hooks";
import { orderCtrl } from "../../../api";
import { LoadingScreen } from "../../../components/Shared";

export function OrdersScreen() {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      getOrder();
    }, [])
  );
  const getOrder = async () => {
    try {
      const response = await orderCtrl.getAll(user.id);
      setOrders(response);
    } catch (error) {
      Toast.show("Error", {
        position: Toast.positions.CENTER,
      });
    }
  };
  return (
    <View>
      {!orders ? (
        <LoadingScreen text="Cargando pedidos" />
      ) : size(orders) === 0 ? (
        <Text>No tienes pedidos</Text>
      ) : (
        <Text>Mis pedidos</Text>
      )}
    </View>
  );
}
