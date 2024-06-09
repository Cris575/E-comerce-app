import { View, Text, Pressable } from "react-native";
import { styles } from "./Address.styles";

export function Address(props) {
  const { address } = props;
  const data = address.attributes;
  return (
    <Pressable>
      <View style={[styles.container]}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.address}>{data.name}</Text>
        <Text style={styles.state}>
          {data.state}, {data.city}, {data.postal_code}
        </Text>
        <Text>{data.country}</Text>
        <Text>Numero de telefono: {data.phone}</Text>
      </View>
    </Pressable>
  );
}
