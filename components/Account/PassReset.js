import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Text, TextInput } from "react-native";

export const PassReset = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

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
    <>
      <TextInput
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2 text-right"
        style={{ fontFamily: "DubaiW23-Medium" }}
        current-password
        secureTextEntry={true}
        placeholder="الرقم السري الحالي"
      />
      <TextInput
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2 text-right"
        style={{ fontFamily: "DubaiW23-Medium" }}
        new-password
        secureTextEntry={true}
        placeholder="الرقم السري الجديد"
      />
      <TextInput
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2 text-right"
        style={{ fontFamily: "DubaiW23-Medium" }}
        secureTextEntry={true}
        placeholder="تكرار الرقم السري الجديد"
      />
    </>
  );
};
