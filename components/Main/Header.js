import { Modal, Pressable, Text, View } from "react-native";
import { useSelected } from "../../lib/selectedContext";
import { BoldText } from "../Text/BoldText";
import { Filter } from "lucide-react-native";
import { useState } from "react";

// sort : price, rating
// filter : liked, offers

export default function Header() {
  const { selected } = useSelected();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="bg-[#bd85a69b] flex justify-end items-center absolute top-0 w-full h-[87px]">
      {selected === "الرئيسية" && (
        <Pressable
          className="absolute left-3 top-[55px]"
          onPress={() => setModalVisible(true)}
        >
          <Filter className="max-h-[18px]" fill="white" />
        </Pressable>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="h-full justify-center items-center bg-zinc-500/50">
          <View className="bg-[#ece1e5] border border-zinc-500/30 rounded-xl w-[65%] h-[100px]">
            <View className="flex-row gap-1 items-end h-full w-full p-1 pr-2">
              <Pressable
                className="items-center justify-center bg-pink-200/60 h-9 w-[49.5%] rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <BoldText classNames="text-[15px] text-pink-900">
                  تطبيق
                </BoldText>
              </Pressable>
              <Pressable
                className="items-center justify-center bg-pink-200/30 h-9 w-[49.5%] rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <BoldText classNames="text-[15px] text-pink-900">
                  إلغاء
                </BoldText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <BoldText classNames="text-lg text-white m-2">{selected}</BoldText>
    </View>
  );
}
