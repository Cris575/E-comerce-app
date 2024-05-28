import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../screens/Auth/AuthScreen";
import { screensName } from "../../utils";
import { HomeStack, WhislistStack, CartStack, AccountStack } from "../stacks";
import { View } from "react-native";
import { Badge } from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarActiveTintColor: "#000",
        tabBarStyle: styles.tapBar,
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name={screensName.home.root}
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name={screensName.wishlist.root}
        component={WhislistStack}
        options={{ title: "Lista de deseos" }}
      />
      <Tab.Screen
        name={screensName.cart.root}
        component={CartStack}
        options={{ title: "Carrito" }}
      />
      <Tab.Screen
        name={screensName.account.root}
        component={AccountStack}
        options={{ title: "Mi cuenta" }}
      />
    </Tab.Navigator>
  );
}

function setIcon(route, routeStatus) {
  const totalProducts = 6;

  let iconNeme = "";
  let color = "#fff";

  if (routeStatus.focused) {
    color = "#0098d3";
  }

  if (route.name === screensName.home.root) {
    iconNeme = "home";
  }

  if (route.name === screensName.wishlist.root) {
    iconNeme = "heart";
  }

  if (route.name === screensName.account.root) {
    iconNeme = "user";
  }

  if (route.name === screensName.cart.root) {
    return (
      <View>
        <AwesomeIcon name="shopping-cart" color={color} style={styles.icon} />
        {totalProducts > 0 && <Badge style={styles.totalCard}>{totalProducts}</Badge>}
      </View>
    );
  }

  return <AwesomeIcon name={iconNeme} color={color} style={styles.icon} />;
}
