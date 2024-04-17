import { View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { RegularText } from "../Text/RegularText";

export const InfoView = () => {
  return (
    <>
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
    </>
  );
};
