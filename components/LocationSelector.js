import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const LocationSelector = () => {
  const [location, setLocation] = useState("نجيك");

  return (
    <View className="w-[66%] h-12 mt-[88px] fixed flex-row justify-between items-center">
      <Pressable
        className={`${
          location === "تجينا" ? "bg-pink-200/60" : "bg-pink-200/20"
        } py-2 px-12 rounded-lg`}
        onPress={() => setLocation("تجينا")}
      >
        <Text className="font-bold text-[15px] text-pink-900">تجينا</Text>
      </Pressable>
      <Pressable
        className={`${
          location === "نجيك" ? "bg-pink-200/60" : "bg-pink-200/20"
        } py-2 px-12 rounded-lg`}
        onPress={() => setLocation("نجيك")}
      >
        <Text className="font-bold text-[15px] text-pink-900">نجيك</Text>
      </Pressable>
    </View>
  );
};

export default LocationSelector;
