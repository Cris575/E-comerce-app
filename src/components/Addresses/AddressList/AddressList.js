import { View } from "react-native";
import { map } from "lodash";
import { Address } from "./Address";
import { styles } from "./AddressList.styles";

export function AddressList(props) {
  const { addresses } = props;

  return (
    <View style={styles.container}>
      {map(addresses, (address) => (
        <Address key={address.id} addressId={address.id} address={address.attributes} />
      ))}
    </View>
  );
}
