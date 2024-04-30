import { Pressable, View } from "react-native";
import { BoldText } from "../Text/BoldText";
import { useState } from "react";
import { RegularText } from "../Text/RegularText";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const changeTimeHndler = () => {
    return (
      <DateTimePicker
        value={time}
        onChange={(e) => setTime(new Date(e.nativeEvent.timestamp))}
        mode="time"
        display="clock"
      />
    );
  };
  const changeDateHndler = () => {
    return (
      <DateTimePicker
        value={date}
        onChange={(e) => setDate(new Date(e.nativeEvent.timestamp))}
        mode="date"
        display="spinner"
      />
    );
  };
  return (
    <View className="w-full h-[81%] mt-[35px] justify-between items-center">
      <View className="flex-row gap-2 w-full justify-center items-center bg-[#FDE2F1]/50 h-[120px]">
        <View>
          <RegularText classNames="text-center">وقت الموعد</RegularText>
          <View className="bg-white rounded-lg px-10 py-1 my-1 border border-zinc-400/20">
            <Pressable onPress={changeTimeHndler}>
              <BoldText classNames="text-center text-pink-900/80">
                {time.toLocaleTimeString()}
              </BoldText>
            </Pressable>
          </View>
        </View>
        <View>
          <RegularText classNames="text-center">تاريخ الموعد</RegularText>
          <View className="bg-white rounded-lg px-10 py-1 my-1 border border-zinc-400/20">
            <BoldText classNames="text-center text-pink-900/80">
              {date.toISOString().split("T")[0]}
            </BoldText>
          </View>
        </View>
      </View>
      <Pressable className="border-t-8 border-white items-center justify-center w-full bg-[#FDE2F1] h-[55px] rounded-t-xl">
        <BoldText classNames="text-[15px] tracking-widest	text-pink-900">
          إكمال الحجز
        </BoldText>
      </Pressable>
    </View>
  );
};
