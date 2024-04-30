import { Image, Pressable, Text, TextInput, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { ArrowRight, SendHorizonal } from "lucide-react-native";
import { useSelected } from "../../lib/selectedContext";
import { RegularText } from "../Text/RegularText";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export const Conversation = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const { setSelected } = useSelected();

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "DubaiW23-Medium": require("../../assets/fonts/DubaiW23-Medium.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text className="">...</Text>;
  }

  return (
    <View className="w-full h-[81.5%] mt-[29.5px] justify-between items-center">
      <View className="flex-row gap-1 w-full justify-end items-center mx-0 px-3 bg-[#f3d9e7] h-[65px]">
        <Pressable
          className="flex-row justify-end items-center h-[65px]"
          onPress={() => setSelected("ملف مقدمة الخدمة")}
        >
          <View>
            <BoldText classNames="text-pink-950/70 text-[16px] truncate mx-2">
              رويدة الحداد
            </BoldText>
            <RegularText classNames="text-pink-950/70 text-[12px] truncate mx-2">
              مقدمة خدمة
            </RegularText>
          </View>
          <Image
            className="aspect-square w-[45px] rounded-full mx-2 mb-1 object-cover"
            source={require("../../assets/users/user-1.png")}
          />
        </Pressable>
        <Pressable onPress={() => setSelected("المحادثات")}>
          <ArrowRight className="w-7 text-white" />
        </Pressable>
      </View>
      <View className="flex-row-reverse justify-evenly border-white items-center w-full bg-zinc-100 h-[55px] rounded-xl">
        <TextInput
          className="flex-row-reverse h-10 w-[85%] bg-white border border-black/10 rounded-2xl my-1 p-2 text-right"
          style={{ fontFamily: "DubaiW23-Medium" }}
          placeholder="الرسالة"
          onChangeText={setMessage}
          value={message}
        />
        <SendHorizonal className="text-pink-900/70" />
      </View>
    </View>
  );
};
