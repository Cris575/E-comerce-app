import { View, Text, Image, ActivityIndicator } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { fn } from "../../../../utils";
import { styles } from "./Product.styles";

export function Product(props) {
  const { product } = props;
  const productInfo = product.attributes;

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
          <Button style={styles.btnGoToProduct} mode="contained">
            Ver producto
          </Button>
          <IconButton icon="close" iconColor="#fff" style={styles.btnDelete} />
        </View>
      </View>
    </View>
  );
}
