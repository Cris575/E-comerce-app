import { View, Text, Image, ActivityIndicator } from "react-native";
import { useState } from "react";
import { Button, IconButton } from "react-native-paper";
import { fn, screensName } from "../../../../utils";
import { styles } from "./Product.styles";
import { useNavigation } from "@react-navigation/native";
import { wishlistCtrl } from "../../../../api";
import { useAuth } from "../../../../hooks";

export function Product(props) {
  const { product, onReload } = props;
  const { user } = useAuth();
  const productInfo = product.attributes;
  const navigation = useNavigation();
  const [loaging, setLoaging] = useState(false);

  const goToProduct = () => {
    navigation.navigate(screensName.home.product, { productId: product.id });
  };

  const deleteFavorite = async () => {
    setLoaging(true);
    await wishlistCtrl.delete(user.id, product.id);
    onReload();
    setLoaging(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{ uri: productInfo.main_image.data.attributes.url }} style={styles.image} />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">
            {productInfo.title}
          </Text>
          <View style={styles.prices}>
            <Text style={styles.currentPrice}>
              ${fn.calcPrice(productInfo.price, productInfo.discount)}
            </Text>
          </View>
          {productInfo.discount && <Text style={styles.oldPrice}>${productInfo.price}</Text>}
        </View>
        <View style={styles.actions}>
          <Button style={styles.btnGoToProduct} mode="contained" onPress={goToProduct}>
            Ver producto
          </Button>
          <IconButton
            icon="close"
            iconColor="#fff"
            style={styles.btnDelete}
            onPress={deleteFavorite}
          />
        </View>
      </View>
      {loaging && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );
}
