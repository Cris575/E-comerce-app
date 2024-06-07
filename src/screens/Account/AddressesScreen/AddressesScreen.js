import { View, Text, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { addressCtrl } from "../../../api";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks";
import { IconButton } from "react-native-paper";
import { size } from "lodash";
import { styles } from "./AddressesScreen.styles";
import { AddressList } from "../../../components/Addresses";
import { screensName } from "../../../utils";

export function AddressesScreen() {
  const [addresse, setAddresse] = useState(null);
  const { user } = useAuth();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      retiveAddresses();
    }, [])
  );

  const retiveAddresses = async () => {
    const response = await addressCtrl.getAll(user.id);
    setAddresse(response?.data || []);
  };

  const goToAddAddress = () => {
    navigation.navigate(screensName.account.addEditAddress);
  };

  return (
    <ScrollView styles={styles.container}>
      <Pressable onPress={goToAddAddress}>
        <View style={styles.addAddress}>
          <Text style={styles.addAdressText}>Añadir una dirección</Text>
          <IconButton icon="arrow-right" colo="#000" size={19} />
        </View>
      </Pressable>
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
