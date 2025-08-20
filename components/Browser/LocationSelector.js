import { Pressable, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { useLocation } from "../../lib/locationContext";

const LocationSelector = () => {
  const { location, setLocation } = useLocation();

  return (
    <View className="w-full h-12 mt-[88px] fixed flex-row justify-center items-center">
      <Pressable
        className={`${
          location === "تجينا" ? "bg-primary-700/60" : "bg-primary-700/20"
        } py-2 px-12 rounded-lg mx-[2px]`}
        onPress={() => setLocation("تجينا")}
      >
        <BoldText classNames="text-[15px] text-text-200">تجينا</BoldText>
      </Pressable>
      <Pressable
        className={`${
          location === "نجيكِ" ? "bg-primary-700/60" : "bg-primary-700/20"
        } py-2 px-12 rounded-lg mx-[2px]`}
        onPress={() => setLocation("نجيكِ")}
      >
        <BoldText classNames="text-[15px] text-text-200">نجيكِ</BoldText>
      </Pressable>
    </View>
  );
};

export default LocationSelector;
