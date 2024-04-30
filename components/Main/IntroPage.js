import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { BoldText } from "../Text/BoldText";
import { RegularText } from "../Text/RegularText";
import { useSelected } from "../../lib/selectedContext";
import { useLocation } from "../../lib/locationContext";

export default function Intro() {
  const { setSelected } = useSelected();
  const { setLocation } = useLocation();

  return (
    <ImageBackground
      className="w-full"
      source={require("../../assets/bg.jpg")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <BoldText classNames="text-[#a0667092] text-2xl my-10">
          يرجى اختيار موقع الخدمة
        </BoldText>
        <View className="flex-row gap-5">
          <Pressable
            className="flex justify-center items-center rounded-full border-2 border-gray-400/20 w-[135] py-4"
            onPress={() => {
              setSelected("الرئيسية");
              setLocation("نجيكِ");
            }}
          >
            <Image
              className="w-[63px] h-[63px]"
              source={require("../../assets/4363444.png")}
            />

            <RegularText classNames="text-[#a0667092] mt-1 text-[18px] ">
              نجيكِ
            </RegularText>
          </Pressable>
          <Pressable
            className="flex justify-center items-center rounded-full border-2 border-gray-400/20 w-[135] py-4"
            onPress={() => {
              setSelected("الرئيسية");
              setLocation("تجينا");
            }}
          >
            <Image
              className="w-[63px] h-[63px]"
              source={require("../../assets/830469.png")}
            />
            <RegularText classNames="text-[#a0667092] mt-1 text-[18px]">
              تجينا
            </RegularText>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  readexpro: {
    fontFamily: "ReadexPro-Bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
