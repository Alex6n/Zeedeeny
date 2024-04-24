import { Image, Pressable, View } from "react-native";
import { useItems } from "../../lib/ItemsContext";
import { useSelected } from "../../lib/selectedContext";
import { Heart, ImageOff, Share, Star } from "lucide-react-native";
import { RegularText } from "../Text/RegularText";

export const ItemPage = () => {
  const { selected } = useSelected();
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

      <View className="flex-row absolute top-[220px] w-[90%] h-34 bg-[#fff5fa] rounded-xl border-[3px] border-white p-2">
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
          <RegularText classNames="text-black truncate  text-[13px]">
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
    </>
  );
};
