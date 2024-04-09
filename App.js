import { View } from "react-native";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import { SelectedProvider } from "./lib/selectedContext";
import ListContainer from "./components/ListContainer";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <SelectedProvider>
        <Header />
        <ListContainer>
          <ListItem
            title="خدمة البدي كير لليدين"
            descreption="توفر هذه الخدمة العناية باليدين (تقليم الأظافر وطلائها)"
            provider="سارة الثقفي"
            price="210"
            offer="30%"
            image={require("./assets/example.jpeg")}
            rating={4}
          />
          <ListItem
            title="شسوار الشعر"
            descreption="تقدم هذه الخدمة سشوار للشعر"
            provider="سمية الزهراني"
            price="120"
            rating={2.3}
          />
        </ListContainer>
        <NavMenu />
      </SelectedProvider>
    </View>
  );
}
