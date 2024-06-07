import { View, Animated, Keyboard } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "./SearchInput.styles";
import { AnimatedIcon, searchAnimation } from "./SearchInput.animation";
import { useState } from "react";

export function SearchInput() {
  const [containerHeigth, setContainerHeigth] = useState(0);
  const openSearch = () => {
    searchAnimation.transition.start();
  };
  const closeSearch = () => {
    searchAnimation.transitionReset.start();
    Keyboard.dismiss();
  };

  return (
    <View
      style={styles.container}
      onLayout={(e) => setContainerHeigth(e.nativeEvent.layout.height)}>
      <View style={styles.containerInput}>
        <AnimatedIcon
          name="arrow-left"
          size={20}
          style={[styles.backArrow, searchAnimation.arrow]}
          onPress={closeSearch}
        />
        <Animated.View style={[searchAnimation.input, { width: searchAnimation.inputWidth }]}>
          <Searchbar
            placeholder="Buscar producto"
            autoCapitalize="none"
            style={styles.searchBar}
            onFocus={openSearch}
          />
        </Animated.View>
      </View>
    </View>
  );
}
