import { Pressable, Text, View } from "react-native";
import { Heart, Share2, Star } from "lucide-react-native";
import { useState } from "react";

const ListItem = () => {
  const [Liked, setLiked] = useState(false);
  return (
    <Pressable className="flex-row gap-1 pl-[2px] mx-20 my-1 justify-start items-center border border-gray-200 bg-pink-100/40 w-full h-28 py-1 rounded-2xl">
      <View className="aspect-square w-[100px] bg-slate-400/10 rounded-xl mb-1"></View>

      <View className="flex-col w-[69%] items-end text-ellipsis">
        <View className="flex-row-reverse w-full justify-between my-1 h-5">
          <Text className="text-black truncate w-[73%] font-bold">
            خدمة البدي كير لليدين
          </Text>
          <View className="flex items-center justify-center h-[19]">
            <Text className="text-white text-[10px] rounded-md bg-rose-600/90 p-[3px]">
              30% OFFER
            </Text>
          </View>
        </View>

        <Text className="text-zinc-600 text-xs truncate h-8">
          توفر هذه الخدمة العناية باليدين ( تقليم الأظافر وطلائها )
        </Text>

        <Text className="text-[#633e539b] text-[10px] truncate mb-1">
          مقدمة الخدمة : سارة الثقفي
        </Text>

        <View className="flex-row justify-between w-full">
          <View className="flex-row">
            {[...Array(3)].map((_, index) => (
              <Star
                fill="rgb(252 211 77)"
                className="max-w-[16px] max-h-[16px]"
              />
            ))}
            {[...Array(2)].map((_, index) => (
              <Star
                fill="rgb(209 213 219)"
                className="max-w-[16px] max-h-[16px]"
              />
            ))}
          </View>

          <View className="flex-row-reverse justify-between items-center w-28">
            <Text className="text-xs text-green-600">210 RS</Text>
            <View className="flex-row-reverse gap-3">
              <Pressable onPress={() => setLiked(!Liked)}>
                <Heart
                  fill={Liked ? "red" : "none"}
                  className={`max-w-[20px] max-h-[20px] ${
                    Liked ? "text-red-500" : "text-zinc-400"
                  }`}
                />
              </Pressable>
              <Pressable>
                <Share2 className="max-w-[18px] max-h-[18px] text-zinc-400" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListItem;
