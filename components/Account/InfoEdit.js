import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Text, TextInput } from "react-native";

export const InfoEdit = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const [data, onChangeData] = useState({
    name: "رانيا الشريف",
    username: "Rania44",
    phone: "+966 504788421",
    email: "Rania44@example.com",
  });

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
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2"
        style={{ fontFamily: "DubaiW23-Medium" }}
        placeholder="الاسم العام"
        onChangeText={(newName) => onChangeData({ ...data, name: newName })}
        value={data.name}
      />
      <TextInput
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2"
        style={{ fontFamily: "DubaiW23-Medium" }}
        placeholder="اسم المستخدمة"
        onChangeText={(newUsername) =>
          onChangeData({ ...data, username: newUsername })
        }
        value={data.username}
      />
      <TextInput
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2"
        style={{ fontFamily: "DubaiW23-Medium" }}
        placeholder="رقم الهاتف"
        onChangeText={(newPhone) => onChangeData({ ...data, phone: newPhone })}
        keyboardType="numeric"
        value={data.phone}
      />
      <TextInput
        className="flex-row-reverse h-10 w-[85%] bg-slate-300/10 border border-black/10 rounded my-1 p-2"
        style={{ fontFamily: "DubaiW23-Medium" }}
        placeholder="البريد الالكتروني"
        onChangeText={(newEmail) => onChangeData({ ...data, email: newEmail })}
        value={data.email}
      />
    </>
  );
};
