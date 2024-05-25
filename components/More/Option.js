import { Pressable } from "react-native";
import { RegularText } from "../Text/RegularText";
import { useState } from "react";
import { useProvider } from "../../lib/providerState";

export const Option = ({ title, providerOnly, pressAction }) => {
  const { provider } = useProvider();

  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={pressAction}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`${providerOnly ? (provider ? "" : "hidden") : ""} ${
        pressed ? "bg-secondary-700/70" : "bg-zinc-100/0"
      } flex-row-reverse gap-1 mx-20 justify-start items-center border-b border-gray-400/60 w-full h-[43px] rounded transition-all duration-700`}
    >
      <RegularText classNames="mr-2 text-[17px] text-text-100/70">
        {title}
      </RegularText>
    </Pressable>
  );
};
