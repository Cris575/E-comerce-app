import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/context";
import { RootNavigation } from "./src/navigation";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </AuthProvider>
  );
}
