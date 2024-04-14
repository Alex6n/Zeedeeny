import { Image, Text, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { RegularText } from "../Text/RegularText";

// Buttons
// Manage Account
// Convert to Provider
// Logout

export const AccountInfo = () => {
  return (
    <View className="h-full mt-[290px] mb-[61px] w-[95%]">
      <View className="items-center rounded-md">
        <Image
          className="aspect-square h-[90px] rounded-full mx-2 my-1 object-cover"
          source={require("../../assets/users/user-2.png")}
        />
        <BoldText classNames="text-[16px]">رانيا الشريف</BoldText>
        <BoldText classNames="text-[12px] text-zinc-500">حساب مستخدمة</BoldText>
        <View className=""></View>
      </View>
    </View>
  );
};
