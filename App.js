import { View } from "react-native";
import { SelectedProvider } from "./lib/selectedContext";
import AppView from "./components/Main/AppView";

// TODO: Add filters dialog option to browser
// TODO: Work on categories
// TODO: Work on chat
// TODO: Work on Account
// TODO: Work on Product Page
// TODO: Work on Service Provider
// TODO: Work on Chat Simulation
// TODO: Work on Booking Dialoge
// TODO: Work on Rating Diagloge
// TODO: Connect everything

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <SelectedProvider>
        <AppView />
      </SelectedProvider>
    </View>
  );
}
