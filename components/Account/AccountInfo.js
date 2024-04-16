import { Image, Pressable, Text, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { RegularText } from "../Text/RegularText";

export const AccountInfo = () => {
  return (
    <View className="h-full mt-[290px] mb-[61px] w-[95%]">
      <View className="items-center rounded-md">
        <Image
          className="aspect-square h-[90px] rounded-full mx-2 my-1 object-cover"
          source={require("../../assets/users/user-2.png")}
        />
        <BoldText classNames="text-[16px]">رانيا الشريف</BoldText>
        <BoldText classNames="text-[12px] text-zinc-500 mb-4">
          حساب مستخدمة
        </BoldText>
        <View className="flex-row-reverse h-10 w-[85%] bg-slate-500/10 border border-black/10 rounded my-1 p-2">
          <BoldText>الاسم العام : </BoldText>
          <RegularText classNames="text-zinc-600">رانيا الشريف</RegularText>
        </View>
        <View className="flex-row-reverse h-10 w-[85%] bg-slate-500/10 border border-black/10 rounded my-1 p-2">
          <BoldText>اسم المستخدمة : </BoldText>
          <RegularText classNames="text-zinc-600">Rania44</RegularText>
        </View>
        <View className="flex-row-reverse h-10 w-[85%] bg-slate-500/10 border border-black/10 rounded my-1 p-2">
          <BoldText>رقم الهاتف : </BoldText>
          <RegularText classNames="text-zinc-600">+966 504788421</RegularText>
        </View>
        <View className="flex-row-reverse h-10 w-[85%] bg-slate-500/10 border border-black/10 rounded my-1 p-2">
          <BoldText>البريد الالكتروني : </BoldText>
          <RegularText classNames="text-zinc-600">
            Rania44@example.com
          </RegularText>
        </View>
        <View className="flex-row-reverse h-10 w-[85%] my-1 justify-between">
          <Pressable className="items-center justify-center bg-pink-200/60 w-[49.5%] rounded-lg">
            <BoldText classNames="text-[15px] text-pink-900">
              إدارة الحساب
            </BoldText>
          </Pressable>
          <Pressable className="items-center justify-center bg-pink-200/60 w-[49.5%] rounded-lg">
            <BoldText classNames="text-[15px] text-pink-900">
              تقديم خدمات
            </BoldText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
