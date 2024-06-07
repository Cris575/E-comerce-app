import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./Address.style";
import { screensName } from "../../../../utils";
import { addressCtrl } from "../../../../api";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";

export function Address(props) {
  const { addressId, address, onReload } = props;
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

  const deleteAddres = async () => {
    try {
      await addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      Toast.show("Error al elimianr la direccion", {
        position: Toast.positions.CENTER,
      });
    }
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
