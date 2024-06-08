import { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import { wishlistCtrl } from "../../../../api";
import Toast from "react-native-root-toast";
import { useAuth } from "../../../../hooks";
import { styles } from "./Favorite.styles";

export function Favorite(props) {
  const { productId } = props;
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [hasWishlist, setHasWishlist] = useState(undefined);

  useEffect(() => {
    setHasWishlist(false);
  }, []);

  const addWishlist = async () => {
    try {
      setLoading(true);
      await wishlistCtrl.add(user.id, productId);
    } catch (error) {
      console.log(error);
      Toast.show("error en el prodcuto", {
        position: Toast.positions.CENTER,
      });
    }
    setLoading(false);
  };
  if (hasWishlist === undefined) return null;
  return (
    <IconButton
      icon="heart"
      style={styles.iconButton}
      size={30}
      iconColor="#fff"
      onPress={addWishlist}
      disabled={loading}
    />
  );
}
