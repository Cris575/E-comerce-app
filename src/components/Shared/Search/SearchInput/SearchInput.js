import { View, Animated, Keyboard } from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { searchHistoryCtrl } from "../../../../api";
import { useSearch } from "../../../../hooks";
import { screensName } from "../../../../utils";
import { styles } from "./SearchInput.styles";
import { AnimatedIcon, searchAnimation } from "./SearchInput.animation";
import { useState } from "react";
import { SearchHistory } from "../SearchHistory";

export function SearchInput() {
  const [containerHeigth, setContainerHeigth] = useState(0);
  const [openHistory, setOpenHistory] = useState(false);
  const { searchText, setSearchText } = useSearch();
  const navigation = useNavigation();

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

  const onSearch = async (reuseSearch) => {
    const isReuse = typeof reuseSearch === "string";
    if (!isReuse) {
      await searchHistoryCtrl.update(searchText);
    }

    closeSearch();
    navigation.navigate(screensName.home.search);
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
            onChangeText={setSearchText}
            onSubmitEditing={onSearch}
          />
        </Animated.View>
      </View>
      <SearchHistory open={openHistory} height={containerHeigth} onSearch={onSearch} />
    </View>
  );
}
