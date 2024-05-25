import { Pressable, View } from "react-native";
import { useSelected } from "../../lib/selectedContext";
import { BoldText } from "../Text/BoldText";
import { Filter } from "lucide-react-native";
import { Filters } from "./Filters";
import { useState } from "react";

export default function Header() {
  const { selected } = useSelected();

  const [modalVisible, setModalVisible] = useState(false);

  let Browser = [
    "العناية بالشعر",
    "إزالة الشعر",
    "قص الشعر",
    "الاستشوار",
    "المكياج",
    "صبغ الشعر",
    "العناية بالجسم",
    "تدليك",
    "الخياطة",
    "الرئيسية",
  ];

  return (
    <View className="bg-primary-600 flex justify-end items-center absolute top-0 w-full h-[87px]">
      {Browser.includes(selected) && (
        <Pressable
          className="absolute left-3 top-[55px]"
          onPress={() => setModalVisible(true)}
        >
          <Filter className="max-h-[18px]" fill="white" />
        </Pressable>
      )}
      <Filters modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <BoldText classNames="text-lg text-white m-2">{selected}</BoldText>
    </View>
  );
}
