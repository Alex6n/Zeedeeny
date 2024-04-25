import { ScrollView, View } from "react-native";

const ListContainer = ({ children, classNames }) => {
  return (
    <ScrollView className={`px-2 mb-[61px] ${classNames}`}>
      <View className="w-full flex-1 h-full items-center">{children}</View>
    </ScrollView>
  );
};

export default ListContainer;
