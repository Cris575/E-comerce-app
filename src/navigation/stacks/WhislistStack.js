import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WhislistScreen } from "../../screens/Whislist";
import { screensName } from "../../utils/screensName";

const Stack = createNativeStackNavigator();

export function WhislistStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.wishlist.wishlist} component={WhislistScreen} />
    </Stack.Navigator>
  );
}
