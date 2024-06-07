import { View, TouchableOpacity, Text } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./SearchHistory.styles";
import { searchHistoryCtrl } from "../../../../api";
import { useAuth, useSearch } from "../../../../hooks";
import Toast from "react-native-root-toast";
import { map, uniqBy } from "lodash";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";

export function SearchHistory(props) {
  const { open, height, onSearch } = props;
  const [history, setHistory] = useState(null);
  const { setSearchText } = useSearch();
  const containerStyles = { top: height };

  useEffect(() => {
    if (open) getHistory();
  }, [open]);

  const getHistory = async () => {
    try {
      const reponse = await searchHistoryCtrl.get();
      setHistory(reponse);
    } catch (error) {
      Toast.show("Error al obtener el hitorial de busqueda", {
        position: Toast.positions.CENTER,
      });
    }
  };

  const onSearchWrapper = (text) => {
    onSearch(text);
    setSearchText(text);
  };
  if (!open) return null;
  return (
    <View style={[containerStyles, styles.container]}>
      {map(uniqBy(history, "search"), (item, index) => (
        <TouchableOpacity key={index} onPress={() => onSearchWrapper(item.search)}>
          <View style={styles.historyItem}>
            <Text style={styles.text}>{item.search}</Text>
            <AwesomeIcon name="arrow-right" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
