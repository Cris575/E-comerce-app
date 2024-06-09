import { Button } from "react-native-paper";
import { styles } from "./Buy.styles";
import { useCart } from "../../../../hooks";
import Toast from "react-native-root-toast";
import { add } from "lodash";

export function Buy(props) {
  const { productId } = props;
  const { addCart } = useCart();
  const addProductCart = async () => {
    try {
      await addCart(productId);
      Toast.show("Producto añadido al carrito", {
        position: Toast.positions.CENTER,
      });
    } catch (error) {
      Toast.show("Error al añadir al producto al carrito", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <Button
      mode="contained"
      contentStyle={styles.btnBuyContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addProductCart}>
      Añadir al carrito
    </Button>
  );
}
