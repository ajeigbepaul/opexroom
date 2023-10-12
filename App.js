import AppNavigation from "./app/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { AuthProvider } from "./context/authProvider";

export default function App() {
  return (
    // <AuthProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    // </AuthProvider>
  );
}
