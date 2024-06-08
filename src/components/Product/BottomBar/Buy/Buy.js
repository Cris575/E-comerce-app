import { Button } from "react-native-paper";
import { styles } from "./Buy.styles";

export function Buy(props) {
  const { productId } = props;
  return (
    <Button
      mode="contained"
      contentStyle={styles.btnBuyContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}>
      Añadir al carrito
    </Button>
  );
}
