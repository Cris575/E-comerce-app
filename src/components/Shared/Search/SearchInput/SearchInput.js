import { View, Animated, Keyboard } from "react-native";
import { Searchbar } from "react-native-paper";
import { searchHistoryCtrl } from "../../../../api";
import { styles } from "./SearchInput.styles";
import { AnimatedIcon, searchAnimation } from "./SearchInput.animation";
import { useState } from "react";
import { SearchHistory } from "../SearchHistory";

export function SearchInput() {
  const [containerHeigth, setContainerHeigth] = useState(0);
  const [openHistory, setOpenHistory] = useState(false);

  const [searchText, setSearchText] = useState("");

  const openCloseHistory = () => {
    setOpenHistory((prevState) => !prevState);
  };
  const openSearch = () => {
    searchAnimation.transition.start();
    openCloseHistory();
  };
  const closeSearch = () => {
    searchAnimation.transitionReset.start();
    Keyboard.dismiss();
    openCloseHistory();
  };

  const onSearch = async () => {
    await searchHistoryCtrl.update(searchText);
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
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={onSearch}
          />
        </Animated.View>
      </View>
      <SearchHistory
        open={openHistory}
        height={containerHeigth}
        onSearch={() => console.log("Volver a buscar")}
      />
    </View>
  );
}
