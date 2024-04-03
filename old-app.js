import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

const getFont = () =>
  Font.loadAsync({
    "dubai-regular": require("./assets/fonts/DubaiW23-Regular.ttf"),
    "dubai-bold": require("./assets/fonts/DubaiW23-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await getFont();
      } catch (error) {
        console.error("Error loading resources:", error);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      // Hide splash screen
      SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return (
      <View className="bg-zinc-200" style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="bg-zinc-200" style={styles.container}>
      <Text className="text-[#c2a0b0] text-3xl font-extrabold my-10 font-dubai">
        {/*cfaabc */}
        يرجى اختيار موقع الخدمة
      </Text>
      <View className="flex-row gap-5">
        <Pressable
          className="flex justify-center items-center rounded-full border-2 border-gray-400/20 w-[125] py-4"
          onPress={() => {}}
        >
          <Image
            className="w-12 h-12 mb-2"
            source={require("./assets/2162767.png")}
          />

          <Text className="text-[#c2a0b0] mt-1 font-bold text-[18px] ">
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
          <Text className="text-[#c2a0b0] mt-1 font-bold text-[18px]">
            تجينا
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
