import { Modal, Pressable, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { RadioButton, Checkbox } from "react-native-paper";
import { useState } from "react";

// sort : price, rating
// filter : liked, offers

export const Filters = ({ modalVisible, setModalVisible }) => {
  const [checked, setChecked] = useState();
  const [filter1Checked, setfilter1Checked] = useState(false);
  const [filter2Checked, setfilter2Checked] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View className="h-full justify-center items-center bg-zinc-500/50">
        <View className="bg-background-950 rounded-xl justify-between w-[65%] h-[230px]">
          <View className="m-3">
            <BoldText classNames="text-text-200 text-[16px]">
              ترتيب حسب :
            </BoldText>
            <View>
              <RadioButton
                color="#a1a05e"
                value="السعر"
                status={checked === "السعر" ? "checked" : "unchecked"}
                onPress={() => setChecked("السعر")}
              />
              <RadioButton
                color="#a1a05e"
                value="التقييم"
                status={checked === "التقييم" ? "checked" : "unchecked"}
                onPress={() => setChecked("التقييم")}
              />
            </View>
            <BoldText classNames="text-text-200 text-[16px]">
              تصفية حسب :
            </BoldText>
            <View>
              <Checkbox
                color="#a1a05e"
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
          </View>
          <View className="flex-row gap-1 w-full p-1 pr-2">
            <Pressable
              className="items-center justify-center bg-primary-700/60 h-9 w-[49.5%] border border-zinc-100/50 rounded-lg"
              onPress={() => setModalVisible(false)}
            >
              <BoldText classNames="text-[15px] text-text-200">تطبيق</BoldText>
            </Pressable>
            <Pressable
              className="items-center justify-center bg-primary-700/30 h-9 w-[49.5%] border border-zinc-100/50 rounded-lg"
              onPress={() => setModalVisible(false)}
            >
              <BoldText classNames="text-[15px] text-text-200">إلغاء</BoldText>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
