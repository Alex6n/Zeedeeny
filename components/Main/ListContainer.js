import { ScrollView, View } from "react-native";

const ListContainer = ({ children, classNames }) => {
  return (
    <ScrollView className={`w-full h-full px-2 mb-[61px] ${classNames}`}>
      <View className="w-full flex-1 items-center">{children}</View>
    </ScrollView>
  );
};

export default ListContainer;
