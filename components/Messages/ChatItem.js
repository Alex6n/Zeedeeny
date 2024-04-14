import { Circle, User } from "lucide-react-native";
import { Image, Pressable, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { RegularText } from "../Text/RegularText";

export const ChatItem = ({
  image,
  author,
  provider,
  lastMessage,
  lastMessageTime,
  read,
}) => {
  return (
    <Pressable className="flex-row-reverse gap-1 mx-20 my-1 justify-start items-center border border-gray-400/10 bg-[#e45dd815] w-full h-[84px] py-1 rounded-2xl">
      {image ? (
        <Image
          className="aspect-square w-[70px] rounded-full mx-2 mb-1 object-cover"
          source={image}
        />
      ) : (
        <View className="flex items-center justify-center aspect-square w-[70px] bg-white/80 rounded-full border border-gray-400/10 mx-2 mb-1">
          <User className="text-gray-400" />
        </View>
      )}

      <View className="flex-1 mr-2 items-end text-ellipsis">
        <View className="flex-row-reverse w-full my-1 h-5 mt-1">
          <BoldText classNames="text-black truncate">{author}</BoldText>
          {provider && (
            <View className="flex items-center justify-center h-[19] mx-[6px] mt-[1px]">
              <RegularText classNames="text-white text-[10px] rounded-md bg-red-500/90 p-[1px] px-[4px]">
                مقدمة خدمات
              </RegularText>
            </View>
          )}
        </View>

        <RegularText classNames="text-zinc-500 text-xs truncate h-4 mt-1">
          {lastMessage}
        </RegularText>

        <RegularText classNames="text-[#633e539b] text-[10px] truncate h-6">
          {lastMessageTime}
        </RegularText>
      </View>

      {read || <Circle fill="pink" className="pl-12" />}
    </Pressable>
  );
};

// const ListItem = ({
//   title,
//   descreption,
//   price,
//   provider,
//   offer,
//   rating,
//   image,
// }) => {
//   const [liked, setLiked] = useState(false);
//   return (
//     <Pressable className="flex-row gap-1 mx-20 my-1 justify-start items-center border border-gray-200 bg-pink-100/40 w-full h-28 py-1 rounded-2xl">
//       {image ? (
//         <Image
//           className="aspect-square w-[100px] bg-slate-400/10 rounded-xl mb-1 object-cover"
//           source={image}
//         />
//       ) : (
//         <View className="flex items-center justify-center aspect-square w-[100px] bg-slate-400/10 rounded-xl mb-1">
//           <ImageOff className="text-gray-400" />
//         </View>
//       )}

//     </Pressable>
//   );
// };
