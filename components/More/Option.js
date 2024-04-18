import { Pressable } from "react-native";
import { RegularText } from "../Text/RegularText";
import { useState } from "react";
import { useProvider } from "../../lib/providerState";

export const Option = ({ title, providerOnly }) => {
  const { provider } = useProvider();

  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`${providerOnly ? (provider ? "" : "hidden") : ""} ${
        pressed ? "bg-zinc-300" : "bg-zinc-100/0"
      } flex-row-reverse gap-1 mx-20 justify-start items-center border-b border-gray-400/60 w-full h-[43px] rounded transition-all duration-700`}
    >
      <RegularText classNames="mr-2 text-[17px] text-pink-950/70">
        {title}
      </RegularText>
    </Pressable>
  );
};
