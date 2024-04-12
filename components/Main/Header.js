import { View } from "react-native";
import { useSelected } from "../../lib/selectedContext";
import { BoldText } from "../Text/BoldText";

export default function Header() {
  const { selected } = useSelected();

  return (
    <View className="bg-[#bd85a69b] flex justify-end items-center absolute top-0 w-full h-[87px]">
      <BoldText classNames="text-lg text-white m-2">{selected}</BoldText>
    </View>
  );
}
