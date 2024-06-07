import { View, Text } from "react-native";
import { addressCtrl } from "../../../api";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../../hooks";

export function AddressesScreen() {
  const [addresse, setAddresse] = useState(null);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await addressCtrl.getAll(user.id);
        console.log(response);
      })();
    })
  );
  return (
    <View>
      <Text>AddressesScreen</Text>
    </View>
  );
}
