import { PaperProvider } from "react-native-paper";
import { AuthProvider, SearchProvider, CraProvider } from "./src/context";
import { RootNavigation } from "./src/navigation";

export default function App() {
  return (
    <AuthProvider>
      <CraProvider>
        <SearchProvider>
          <PaperProvider>
            <RootNavigation />
          </PaperProvider>
        </SearchProvider>
      </CraProvider>
    </AuthProvider>
  );
}
