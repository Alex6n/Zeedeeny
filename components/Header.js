import { Text, View } from "react-native";
import { useSelected } from "../lib/selectedContext";

export default function Header() {
  const { selected } = useSelected();

  return (
    <View className="bg-[#bd85a69b] flex justify-end items-center absolute top-0 w-full h-[87px]">
      <Text className="text-lg font-bold text-white m-2">{selected}</Text>
    </View>
  );
}
