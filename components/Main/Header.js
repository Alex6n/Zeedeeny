import { Pressable, View } from "react-native";
import { useSelected } from "../../lib/selectedContext";
import { BoldText } from "../Text/BoldText";
import { Filter } from "lucide-react-native";

export default function Header() {
  const { selected } = useSelected();

  return (
    <View className="bg-[#bd85a69b] flex justify-end items-center absolute top-0 w-full h-[87px]">
      {selected === "الرئيسية" && (
        <Pressable className="absolute left-3 top-[55px]">
          <Filter className="max-h-[18px]" fill="white" />
        </Pressable>
      )}
      <BoldText classNames="text-lg text-white m-2">{selected}</BoldText>
    </View>
  );
}
