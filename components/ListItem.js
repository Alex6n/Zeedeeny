import { Pressable, Text, View } from "react-native";
import { Star } from "lucide-react-native";

const ListItem = () => {
  return (
    <Pressable className="flex-row gap-1 pl-[2px] mx-20 my-1 justify-start items-center border border-gray-200 bg-pink-100/40 w-full h-28 py-1 rounded-2xl">
      <View className="aspect-square w-[100px] bg-slate-400/10 rounded-xl mb-1"></View>

      <View className="flex-col w-[69%] items-end text-ellipsis">
        <View className="flex-row-reverse w-full justify-between my-1 h-5">
          <Text className="text-black truncate w-[73%] font-bold">
            خدمة البدي كير لليدين
          </Text>
          <View className="flex items-center justify-center rounded-md bg-rose-600/90 px-1">
            <Text className="text-white text-xs">30% OFFER</Text>
          </View>
        </View>

        <Text className="text-zinc-600 text-xs truncate h-8">
          توفر هذه الخدمة العناية باليدين ( تقليم الأظافر وطلائها )
        </Text>

        <Text className="text-[#633e539b] text-[10px] truncate mb-1">
          مقدمة الخدمة : سارة الثقفي
        </Text>

        <View className="flex-row">
          <View className="flex-row-reverse">
            {[...Array(2)].map((_, index) => (
              <Star
                fill="rgb(209 213 219)"
                className="max-w-[16px] max-h-[16px]"
              />
            ))}
            {[...Array(3)].map((_, index) => (
              <Star
                fill="rgb(252 211 77)"
                className="max-w-[16px] max-h-[16px]"
              />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListItem;
