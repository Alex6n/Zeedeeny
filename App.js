import { View } from "react-native";
import { ProviderStateProvider } from "./lib/providerState";
import { SelectedProvider } from "./lib/selectedContext";
import AppView from "./components/Main/AppView";
import { LocationProvider } from "./lib/locationContext";
import { ItemsProvider } from "./lib/ItemsContext";

// TODO: Work on Product Page
// TODO: Work on Service Provider
// TODO: Work on Booking Dialoge
// TODO: Work on Rating Diagloge

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <SelectedProvider>
        <ProviderStateProvider>
          <LocationProvider>
            <ItemsProvider>
              <AppView />
            </ItemsProvider>
          </LocationProvider>
        </ProviderStateProvider>
      </SelectedProvider>
    </View>
  );
}
