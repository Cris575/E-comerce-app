import { View, Dimensions, Image, Pressable } from "react-native";
import { Carousel, Pagination } from "react-native-snap-carousel";
import { styles } from "./ProductBanners.styles";
import { screensName } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

export function ProductBanners(props) {
  const { banners } = props;
  const navigation = useNavigation();

  const goToProduct = (id) => {
    navigation.push(screensName.home.product, { productId: id });
  };
  const renderItem = ({ item }) => {
    const urlImage = item.attributes.banner.data.attributes.url;

    return (
      <Pressable onPress={() => goToProduct(item.id)}>
        <Image source={{ uri: urlImage }} style={styles.carousel} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={banners}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </View>
  );
}
