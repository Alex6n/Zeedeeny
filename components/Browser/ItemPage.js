import { Image, Pressable, ScrollView, View } from "react-native";
import { useItems } from "../../lib/ItemsContext";
import { useSelected } from "../../lib/selectedContext";
import { Heart, ImageOff, Share, Star, User } from "lucide-react-native";
import { RegularText } from "../Text/RegularText";
import { BoldText } from "../Text/BoldText";
import ListContainer from "../Main/ListContainer";

// TODO : Convert to galary mode instead of only one thumbnail

export const ItemPage = () => {
  const { selected, setSelected } = useSelected();
  const { items, setItems } = useItems();

  const item = items.filter((i) => i.title === selected)[0];

  return (
    <>
      <View className="h-full mt-44">
        {item.image ? (
          <Image resizeMode="cover" source={item.image} className="h-[180px]" />
        ) : (
          <View className="flex items-center justify-center min-w-full h-[180px] bg-slate-400/10 mb-1">
            <ImageOff className="text-gray-400" />
          </View>
        )}
      </View>

      <View className="absolute top-[220px] w-full h-[100%] items-center">
        <View className="flex-row w-[90%] h-34 bg-[#fff5fa] rounded-xl border-[3px] border-white p-2">
          <View className="flex-1 mr-2 items-center justify-center max-w-[35%] text-ellipsis">
            <View className="flex-row-reverse justify-evenly h-10 w-full px-2">
              <Pressable
                onPress={() => {
                  const updatedItems = items.map((i) => {
                    if (i.title === selected) {
                      return { ...i, liked: !i.liked };
                    }
                    return i;
                  });
                  setItems(updatedItems);
                }}
              >
                <Heart
                  fill={item.liked ? "red" : "none"}
                  className={`${item.liked ? "text-red-500" : "text-zinc-400"}`}
                />
              </Pressable>
              <Pressable>
                <Share className="text-zinc-400" />
              </Pressable>
            </View>
            <RegularText classNames="text-[#633e539b] text-[10px] truncate mb-1">
              مقدمة الخدمة : {item.provider}
            </RegularText>

            <View className="flex-row">
              {[...Array(Math.round(item.rating))].map((_, index) => (
                <Star
                  key={index}
                  fill="rgb(252 211 77)"
                  className="max-w-[16px] max-h-[16px]"
                />
              ))}
              {[...Array(5 - Math.round(item.rating))].map((_, index) => (
                <Star
                  key={index}
                  fill="rgb(209 213 219)"
                  className="max-w-[16px] max-h-[16px]"
                />
              ))}
            </View>
          </View>
          <View className="flex-1 mr-2 items-end justify-between text-ellipsis">
            <RegularText classNames="text-black truncate h-[70px] text-[13px]">
              {item.descreption}
            </RegularText>
            <View className="flex-row-reverse items-end h-5">
              <RegularText classNames="text-sm text-green-600 mt-[2px]">
                {item.price} RS
              </RegularText>
              {item.offer && (
                <View className="mr-[5%] mb-[1px] flex items-center justify-center h-[19]">
                  <RegularText classNames="text-white text-[10px] rounded-md bg-rose-600/90 p-[2px] px-[4px]">
                    {item.offer} OFFER
                  </RegularText>
                </View>
              )}
            </View>
          </View>
        </View>
        <View className="flex-row-reverse h-10 w-[85%] my-1 justify-between">
          <Pressable
            className="items-center justify-center bg-pink-200/60 w-[49.5%] rounded-lg"
            onPress={() => setSelected("حجز موعد")}
          >
            <BoldText classNames="text-[15px] text-pink-900">حجز موعد</BoldText>
          </Pressable>
          <Pressable
            className="items-center justify-center bg-pink-200/40 w-[49.5%] rounded-lg"
            onPress={() => setSelected("ملف مقدمة الخدمة")}
          >
            <BoldText classNames="text-[15px] text-pink-900">
              ملف مقدم الخدمة
            </BoldText>
          </Pressable>
        </View>
        <View className="justify-end items-end w-[85%] my-2 mt-4">
          <BoldText classNames="text-pink-900/80 text-[14px]">
            تعليقات العملاء :
          </BoldText>
        </View>
        <ListContainer classNames="w-[100%] max-h-[270px]">
          <View className="flex-row-reverse gap-1 mx-20 my-[1px] justify-start items-center w-[85%] h-34 bg-[#fff5fa] rounded-xl border-[3px] border-white py-2 h-20">
            <Image
              className="aspect-square w-[50px] rounded-full mx-2 mb-1 object-cover"
              source={require("../../assets/users/477ebd019128cab4ca302363a93803ea.jpg")}
            />
            <View className="flex-1 mr-2 items-end text-ellipsis">
              <View className="flex-row-reverse w-full my-1 h-5">
                <BoldText classNames="text-zinc-500 text-[12px] truncate">
                  روان فهد
                </BoldText>
              </View>

              <RegularText classNames="text-black text-xs truncate h-4">
                صراحة الخدمة إبداع, انشالله اتعامل معك مرة ثانية
              </RegularText>

              <View className="flex-row mb-2">
                {[...Array(Math.round(5))].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(252 211 77)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
                {[...Array(5 - 5)].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(209 213 219)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
              </View>
            </View>
          </View>
          <View className="flex-row-reverse gap-1 mx-20 my-[1px] justify-start items-center w-[85%] h-34 bg-[#fff5fa] rounded-xl border-[3px] border-white py-2 h-20">
            <View className="flex items-center justify-center aspect-square w-[50px] bg-white/80 rounded-full border border-gray-400/10 mx-2 mb-1">
              <User className="text-gray-400" />
            </View>
            <View className="flex-1 mr-2 items-end text-ellipsis">
              <View className="flex-row-reverse w-full my-1 h-5">
                <BoldText classNames="text-zinc-500 text-[12px] truncate">
                  جواهر سعد
                </BoldText>
              </View>

              <RegularText classNames="text-black text-xs truncate h-4">
                الخدمة ممتاز
              </RegularText>

              <View className="flex-row mb-2">
                {[...Array(Math.round(3))].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(252 211 77)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
                {[...Array(5 - 3)].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(209 213 219)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
              </View>
            </View>
          </View>
          <View className="flex-row-reverse gap-1 mx-20 my-[1px] justify-start items-center w-[85%] h-34 bg-[#fff5fa] rounded-xl border-[3px] border-white py-2 h-20">
            <View className="flex items-center justify-center aspect-square w-[50px] bg-white/80 rounded-full border border-gray-400/10 mx-2 mb-1">
              <User className="text-gray-400" />
            </View>
            <View className="flex-1 mr-2 items-end text-ellipsis">
              <View className="flex-row-reverse w-full my-1 h-5">
                <BoldText classNames="text-zinc-500 text-[12px] truncate">
                  سارة المطيري
                </BoldText>
              </View>

              <RegularText classNames="text-black text-xs truncate h-4">
                الخدمة ممتازة بس كان فيه تأخر عن الموعد
              </RegularText>

              <View className="flex-row mb-2">
                {[...Array(Math.round(2))].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(252 211 77)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
                {[...Array(5 - 2)].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(209 213 219)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
              </View>
            </View>
          </View>
          <View className="flex-row-reverse gap-1 mx-20 my-[1px] justify-start items-center w-[85%] h-34 bg-[#fff5fa] rounded-xl border-[3px] border-white py-2 h-20">
            <View className="flex items-center justify-center aspect-square w-[50px] bg-white/80 rounded-full border border-gray-400/10 mx-2 mb-1">
              <User className="text-gray-400" />
            </View>
            <View className="flex-1 mr-2 items-end text-ellipsis">
              <View className="flex-row-reverse w-full my-1 h-5">
                <BoldText classNames="text-zinc-500 text-[12px] truncate">
                  حصة مشعل
                </BoldText>
              </View>

              <RegularText classNames="text-black text-xs truncate h-4">
                سعر الخدمة مبالغ فيه شوي
              </RegularText>

              <View className="flex-row mb-2">
                {[...Array(Math.round(2))].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(252 211 77)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
                {[...Array(5 - 2)].map((_, index) => (
                  <Star
                    key={index}
                    fill="rgb(209 213 219)"
                    className="max-w-[16px] max-h-[16px]"
                  />
                ))}
              </View>
            </View>
          </View>
        </ListContainer>
        <Pressable
          onPress={() => setSelected("محادثة")}
          className="absolute top-[489.5px] border-t-8 border-white items-center justify-center w-full bg-[#FDE2F1] h-[55px] rounded-t-xl"
        >
          <BoldText classNames="text-[15px] tracking-widest	text-pink-900">
            التواصل مع مقدمة الخدمة
          </BoldText>
        </Pressable>
      </View>
    </>
  );
};
