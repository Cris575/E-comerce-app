import { AuthScreen } from "../screens/Auth/AuthScreen";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
  const user = "Agustin";

  return user ? <AppNavigation /> : <AuthScreen />;
}
