import { Image, Pressable, ScrollView, View } from "react-native";
import { useItems } from "../../lib/ItemsContext";
import { useSelected } from "../../lib/selectedContext";
import { BadgeCheckIcon, Star } from "lucide-react-native";
import { RegularText } from "../Text/RegularText";
import { BoldText } from "../Text/BoldText";
import ListContainer from "../Main/ListContainer";
import ListItem from "./ListItem";

export const ProviderPage = () => {
  const { selected, setSelected } = useSelected();
  const { items, setItems } = useItems();

  return (
    <>
      <View className="top-[140px] w-full h-[100%] items-center">
        <View className="relative w-[100%] flex-row justify-center h-[140px] bg-[#fff5fa] p-2">
          <Image
            className="absolute bottom-14 h-[100px] w-[100px] rounded-full mx-2 my-1 object-cover"
            source={require("../../assets/users/user-2.png")}
          />
          <View className="flex-1 mt-4 items-center justify-center max-w-[35%] h-24 text-ellipsis">
            <View className="flex-row-reverse mt-[60px]">
              <RegularText classNames="text-[16px]">رانيا الشريف</RegularText>
              <BadgeCheckIcon fill="rgb(244 63 94)" className="text-white" />
            </View>

            <View className="flex-row">
              {[...Array(Math.round(3))].map((_, index) => (
                <Star
                  key={index}
                  fill="rgb(252 211 77)"
                  className="max-w-[16px] max-h-[16px]"
                />
              ))}
              {[...Array(5 - Math.round(3))].map((_, index) => (
                <Star
                  key={index}
                  fill="rgb(209 213 219)"
                  className="max-w-[16px] max-h-[16px]"
                />
              ))}
            </View>
          </View>
        </View>
        <View className="justify-end items-end w-[85%] my-2 mt-4">
          <BoldText classNames="text-pink-900/80 text-[14px]">
            الخدمات :
          </BoldText>
        </View>
        <ListContainer classNames="w-[95%] max-h-[365px]">
          <ListItem
            title="خدمة"
            descreption="وصف"
            provider="مقدمة"
            price={100}
            rating={3}
          />
          <ListItem
            title="خدمة"
            descreption="وصف"
            provider="مقدمة"
            price={100}
            rating={3}
          />
          <ListItem
            title="خدمة"
            descreption="وصف"
            provider="مقدمة"
            price={100}
            rating={3}
          />
          <ListItem
            title="خدمة"
            descreption="وصف"
            provider="مقدمة"
            price={100}
            rating={3}
          />
        </ListContainer>
        <Pressable className="absolute top-[569.5px] border-t-8 border-white items-center justify-center w-full bg-[#FDE2F1] h-[55px] rounded-t-xl">
          <BoldText classNames="text-[15px] tracking-widest	text-pink-900">
            التواصل مع مقدمة الخدمة
          </BoldText>
        </Pressable>
      </View>
    </>
  );
};
