import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./Address.style";
import { screensName } from "../../../../utils";
import { useNavigation } from "@react-navigation/native";

export function Address(props) {
  const { addressId, address } = props;
  const navigation = useNavigation();

  const goToUpdateAddress = () => {
    navigation.navigate(screensName.account.addEditAddress, { addressId: addressId });
  };

  const deleteAddresAlert = () => {
    Alert.alert(
      "Eliminar direccion",
      `¿Estas seguro de que quieres eliminar la dircción ${address.title}`,
      [
        {
          text: "NO",
        },
        {
          text: "SI",
          onPress: deleteAddres,
        },
      ],
      { cancelable: false }
    );
  };

  const deleteAddres = () => {
    console.log("Elimacion ok");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{address.title}</Text>
      <Text>{address.name}</Text>
      <Text>{address.address}</Text>
      <Text>
        {address.state}, {address.city},{address.postal_code}
      </Text>
      <Text>{address.country}</Text>
      <Text>Numero de telefono: {address.phone}</Text>

      <View style={styles.actions}>
        <Button mode="contained" onPress={goToUpdateAddress}>
          Editar
        </Button>
        <Button mode="contained" onPress={deleteAddresAlert}>
          Eliminar
        </Button>
      </View>
    </View>
  );
}
