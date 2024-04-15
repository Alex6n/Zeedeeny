import { useState } from "react";
import { Pressable, View } from "react-native";
import { BoldText } from "../Text/BoldText";

const LocationSelector = () => {
  const [location, setLocation] = useState("نجيكِ");

  return (
    <View className="w-full h-12 mt-[88px] fixed flex-row justify-center items-center">
      <Pressable
        className={`${
          location === "تجينا" ? "bg-pink-200/60" : "bg-pink-200/20"
        } py-2 px-12 rounded-lg mx-[2px]`}
        onPress={() => setLocation("تجينا")}
      >
        <BoldText classNames="text-[15px] text-pink-900">تجينا</BoldText>
      </Pressable>
      <Pressable
        className={`${
          location === "نجيكِ" ? "bg-pink-200/60" : "bg-pink-200/20"
        } py-2 px-12 rounded-lg mx-[2px]`}
        onPress={() => setLocation("نجيكِ")}
      >
        <BoldText classNames="text-[15px] text-pink-900">نجيكِ</BoldText>
      </Pressable>
    </View>
  );
};

export default LocationSelector;
