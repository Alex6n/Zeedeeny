import { ScrollView, View } from "react-native";
// mt-[87px]
const ListContainer = ({ children }) => {
  return (
    <ScrollView className="w-full h-full  mb-[61px] px-2">
      <View className="w-full flex-1 items-center">{children}</View>
    </ScrollView>
  );
};

export default ListContainer;
