import { AuthScreen } from "../screens/Auth/AuthScreen/AuthScreen";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
  const user = null;

  return user ? <AppNavigation /> : <AuthScreen />;
}
