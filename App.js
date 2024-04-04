import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      className="w-full h-full"
      source={require("./assets/bg.jpg")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text
          style={styles.readexpro}
          className="text-[#a0667092] text-3xl font-extrabold my-10"
        >
          {/*cfaabc */}
          يرجى اختيار موقع الخدمة
        </Text>
        <View className="flex-row gap-5">
          <Pressable
            className="flex justify-center items-center rounded-full border-2 border-gray-400/20 w-[125] py-4"
            onPress={() => {}}
          >
            <Image
              className="w-[63px] h-[63px]"
              source={require("./assets/4363444.png")}
            />

            <Text className="text-[#a0667092] mt-1 font-bold text-[18px] ">
              نجيك
            </Text>
          </Pressable>
          <Pressable
            className="flex justify-center items-center rounded-full border-2 border-gray-400/20 w-[125] py-4"
            onPress={() => {}}
          >
            <Image
              className="w-[63px] h-[63px]"
              source={require("./assets/830469.png")}
            />
            <Text className="text-[#a0667092] mt-1 font-bold text-[18px]">
              تجينا
            </Text>
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
