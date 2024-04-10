import { View } from "react-native";
import { SelectedProvider } from "./lib/selectedContext";
import AppView from "./components/AppView";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <SelectedProvider>
        <AppView />
      </SelectedProvider>
    </View>
  );
}
