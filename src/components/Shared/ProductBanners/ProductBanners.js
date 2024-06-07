import { View, Dimensions, Image, Pressable } from "react-native";
import { Carousel, Pagination } from "react-native-snap-carousel";
import { styles } from "./ProductBanners.styles";
import { screensName } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { size } from "lodash";

const width = Dimensions.get("window").width;

export function ProductBanners(props) {
  const { banners } = props;
  const navigation = useNavigation();
  const [bannerActive, setBannerActive] = useState(0);

  const goToProduct = (id) => {
    navigation.navigate(screensName.home.product, { productId: id });
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
        onSnapToItem={(index) => setBannerActive(index)}
      />
      <Pagination
        dotsLength={size(banners)}
        activeDotIndex={bannerActive}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
        containerStyle={styles.dotsContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.dot}
      />
    </View>
  );
}
