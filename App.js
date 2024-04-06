import { ScrollView, Text, View } from "react-native";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import { SelectedProvider } from "./lib/selectedContext";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <SelectedProvider>
        <Header />
        <ScrollView className="w-full h-full mt-[90px] mb-16">
          <View className="flex-1 items-center">
            <View className="bg-black w-full h-24 my-1 mx-20"></View>
          </View>
        </ScrollView>
        <NavMenu />
      </SelectedProvider>
    </View>
  );
}
