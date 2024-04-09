import { ScrollView, View } from "react-native";

const ListContainer = ({ children }) => {
  return (
    <ScrollView className="w-full h-full mt-[87px] mb-[61px] px-2">
      <View className="w-full flex-1 items-center">{children}</View>
    </ScrollView>
  );
};

export default ListContainer;
