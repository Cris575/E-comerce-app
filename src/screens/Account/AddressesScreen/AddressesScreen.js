import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { addressCtrl } from "../../../api";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../../hooks";
import { IconButton } from "react-native-paper";
import { size } from "lodash";
import { styles } from "./AddressesScreen.styles";
import { AddressList } from "../../../components/Addresses";

export function AddressesScreen() {
  const [addresse, setAddresse] = useState(null);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      retiveAddresses();
    }, [])
  );

  const retiveAddresses = async () => {
    const response = await addressCtrl.getAll(user.id);
    setAddresse(response?.data || []);
  };
  return (
    <ScrollView styles={styles.container}>
      {!addresse ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : size(addresse) === 0 ? (
        <Text style={styles.noAddressText}>Crea tu primera dirección</Text>
      ) : (
        <AddressList addresses={addresse} />
      )}
    </ScrollView>
  );
}
