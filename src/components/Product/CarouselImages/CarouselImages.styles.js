import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image: {
    width,
    height: width,
    resizeMode: "stretch",
  },
  dotsContainer: {
    bottom: 15,
  },
});
