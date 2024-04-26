import { Image, Pressable, View } from "react-native";
import { Heart, ImageOff, Share2, Star } from "lucide-react-native";
import { useState } from "react";
import { RegularText } from "../Text/RegularText";
import { BoldText } from "../Text/BoldText";
import { useSelected } from "../../lib/selectedContext";
import { useItems } from "../../lib/ItemsContext";

const ListItem = ({
  title,
  descreption,
  price,
  provider,
  offer,
  rating,
  liked,
  image,
}) => {
  const { setSelected } = useSelected();
  const { items, setItems } = useItems();

  return (
    <Pressable
      className="flex-row gap-1 mx-20 my-1 justify-start items-center bg-pink-100/40 w-full h-28 py-1 rounded-2xl"
      onPress={() => setSelected(title)}
    >
      {image ? (
        <Image
          className="aspect-square w-[100px] bg-slate-400/10 rounded-xl mb-1 object-cover"
          source={image}
        />
      ) : (
        <View className="flex items-center justify-center aspect-square w-[100px] bg-slate-400/10 rounded-xl mb-1">
          <ImageOff className="text-gray-400" />
        </View>
      )}

      <View className="flex-1 mr-2 items-end text-ellipsis">
        <View className="flex-row-reverse w-full justify-between my-1 h-5">
          <BoldText classNames="text-black truncate w-[73%]">{title}</BoldText>
          {offer && (
            <View className="flex items-center justify-center h-[19]">
              <RegularText classNames="text-white text-[10px] rounded-md bg-rose-600/90 p-[2px] px-[4px]">
                {offer} OFFER
              </RegularText>
            </View>
          )}
        </View>

        <RegularText classNames="text-zinc-500 text-xs truncate h-8 mt-1">
          {descreption}
        </RegularText>

        <RegularText classNames="text-[#633e539b] text-[10px] truncate mb-1">
          مقدمة الخدمة : {provider}
        </RegularText>

        <View className="flex-row justify-between w-full">
          <View className="flex-row">
            {[...Array(Math.round(rating))].map((_, index) => (
              <Star
                key={index}
                fill="rgb(252 211 77)"
                className="max-w-[16px] max-h-[16px]"
              />
            ))}
            {[...Array(5 - Math.round(rating))].map((_, index) => (
              <Star
                key={index}
                fill="rgb(209 213 219)"
                className="max-w-[16px] max-h-[16px]"
              />
            ))}
          </View>

          <View className="flex-row-reverse justify-between items-center w-32">
            <RegularText classNames="text-sm text-green-600">
              {price} RS
            </RegularText>
            <View className="flex-row-reverse gap-4">
              <Pressable
                onPress={() => {
                  const updatedItems = items.map((i) => {
                    if (i.title === title) {
                      return { ...i, liked: !i.liked };
                    }
                    return i;
                  });
                  setItems(updatedItems);
                }}
              >
                <Heart
                  fill={liked ? "red" : "none"}
                  className={`max-w-[20px] max-h-[20px] ${
                    liked ? "text-red-500" : "text-zinc-400"
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
