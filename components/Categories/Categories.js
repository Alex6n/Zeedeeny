import { Image, Pressable, View } from "react-native";
import { RegularText } from "../Text/RegularText";
import { useSelected } from "../../lib/selectedContext";

const Categories = () => {
  const { setSelected } = useSelected();

  return (
    <View className="flex-wrap flex-row w-[90%] justify-center">
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("العناية بالشعر")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/long-wavy-hair-variant.png")}
        />
        <RegularText classNames="text-center">العناية بالشعر</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("إزالة الشعر")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/wax.png")}
        />
        <RegularText classNames="text-center">إزالة الشعر</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("قص الشعر")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/hair-cut.png")}
        />
        <RegularText classNames="text-center">قص الشعر</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("الاستشوار")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/hair-dryer_2444860.png")}
        />
        <RegularText classNames="text-center">الاستشوار</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("المكياج")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/concealer_11901408.png")}
        />
        <RegularText classNames="text-center">المكياج</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("صبغ الشعر")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/hair-dye_2444867.png")}
        />
        <RegularText classNames="text-center">صبغ الشعر</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("العناية بالجسم")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/hand-washing_3035026.png")}
        />
        <RegularText classNames="text-center">العناية بالجسم</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("تدليك")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/relax_1997093.png")}
        />
        <RegularText classNames="text-center">تدليك</RegularText>
      </Pressable>
      <Pressable
        className="m-5 opacity-75"
        onPress={() => setSelected("الخياطة")}
      >
        <Image
          className="w-[63px] h-[63px]"
          source={require("../../assets/Icons/needle_2818570.png")}
        />
        <RegularText classNames="text-center">الخياطة</RegularText>
      </Pressable>
    </View>
  );
};

export default Categories;
