import { Image, Pressable, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { useState } from "react";
import { InfoView } from "./InfoView";
import { InfoEdit } from "./InfoEdit";
import { PassReset } from "./PassReset";
import { useProvider } from "../../lib/providerState";

export const AccountInfo = () => {
  const [manage, setManage] = useState(false);
  const [passReset, setPassReset] = useState(false);

  const { provider, setProvider } = useProvider();

  return (
    <View className="h-full mt-[290px] mb-[61px] w-[95%]">
      <View className="items-center rounded-md">
        <Image
          className="aspect-square h-[90px] rounded-full mx-2 my-1 object-cover"
          source={require("../../assets/users/user-2.png")}
        />
        <BoldText classNames="text-[16px]">رانيا الشريف</BoldText>
        <BoldText classNames="text-[12px] text-zinc-500 mb-4">
          {provider ? "مقدمة خدمات" : "حساب مستخدمة"}
        </BoldText>
        {manage && !passReset && <InfoEdit />}
        {passReset && <PassReset />}
        {!manage && !passReset && <InfoView />}

        <View className="flex-row-reverse h-10 w-[85%] my-1 justify-between">
          {manage && !passReset && (
            <Pressable
              className="items-center justify-center bg-pink-200/60 w-[49.5%] rounded-lg"
              onPress={() => setPassReset(true)}
            >
              <BoldText classNames="text-[15px] text-pink-900">
                تغيير الرقم السري
              </BoldText>
            </Pressable>
          )}
          {!manage && !passReset && (
            <Pressable
              className={`items-center justify-center bg-pink-200/60 ${
                provider ? "w-full" : "w-[49.5%]"
              }  rounded-lg`}
              onPress={() => setManage(true)}
            >
              <BoldText classNames="text-[15px] text-pink-900">
                إدارة الحساب
              </BoldText>
            </Pressable>
          )}
          {passReset && (
            <Pressable
              className="items-center justify-center bg-pink-200/60 w-full rounded-lg"
              onPress={() => {
                setPassReset(false);
                setManage(false);
              }}
            >
              <BoldText classNames="text-[15px] text-pink-900">
                تطبيق التغييرات
              </BoldText>
            </Pressable>
          )}
          {!manage && !passReset && !provider && (
            <Pressable
              className="items-center justify-center bg-pink-200/60 w-[49.5%] rounded-lg"
              onPress={() => setProvider(true)}
            >
              <BoldText classNames="text-[15px] text-pink-900">
                تقديم خدمات
              </BoldText>
            </Pressable>
          )}
          {manage && !passReset && (
            <Pressable
              className="items-center justify-center bg-pink-200/60 w-[49.5%] rounded-lg"
              onPress={() => setManage(false)}
            >
              <BoldText classNames="text-[15px] text-pink-900">
                تطبيق التغييرات
              </BoldText>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};
