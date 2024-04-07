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
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ListContainer>
        <NavMenu />
      </SelectedProvider>
    </View>
  );
}
