import { ActivityIndicator, Text, SafeAreaView } from "react-native";
import { styles } from "./LoadingScreen.styles";
import { size } from "lodash";

export function LoadingScreen(props) {
  const { text = "Cargando...", color = "#000", size = "large" } = props;

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={size} color={color} style={styles.spinner} />
      <Text style={styles.title}>{text}</Text>
    </SafeAreaView>
  );
}
