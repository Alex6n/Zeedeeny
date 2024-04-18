import { View } from "react-native";
import { ProviderStateProvider } from "./lib/providerState";
import { SelectedProvider } from "./lib/selectedContext";
import AppView from "./components/Main/AppView";

// TODO: Confirm initial app structure
// TODO: Add filters dialog option to browser
// TODO: Work on Product Page
// TODO: Work on Service Provider
// TODO: Work on Chat Simulation
// TODO: Work on Booking Dialoge
// TODO: Work on Rating Diagloge
// TODO: Connect everything

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ProviderStateProvider>
        <SelectedProvider>
          <AppView />
        </SelectedProvider>
      </ProviderStateProvider>
    </View>
  );
}
