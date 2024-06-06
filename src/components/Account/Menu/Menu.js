import { View, Text } from "react-native";
import { styles } from "./Menu.styles";
import { map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { accountMenu, appMenu } from "./Menu.data";
import { List } from "react-native-paper";

export function Menu() {
  const navigation = useNavigation();
  const alertLogout = () => {
    console.log("cerrar sesión");
  };
  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        {map(accountMenu, (item, index) => (
          <List.Item
            key={index}
            title={item.title}
            titleStyle={styles.titleItem}
            description={item.description}
            left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </List.Section>

      <List.Section>
        <List.Subheader>App</List.Subheader>
        {map(appMenu, (item, index) => (
          <List.Item
            key={index}
            title={item.title}
            titleStyle={styles.titleItem}
            description={item.description}
            left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </List.Section>

      <List.Section>
        <List.Item
          title="Cerra sesión"
          titleStyle={styles.titleLogoutItem}
          description="Cerrar esta sesión e inciar con otra"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={alertLogout}
        />
      </List.Section>
    </>
  );
}
