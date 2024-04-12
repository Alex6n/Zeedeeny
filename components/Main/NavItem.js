import { Pressable } from "react-native";
import { useSelected } from "../../lib/selectedContext";

export const NavItem = ({ section, children }) => {
  const { selected, setSelected } = useSelected();

  return (
    <Pressable
      onPress={() => setSelected(section)}
      className={`${
        selected === section ? "bg-slate-400/20" : ""
      } rounded-2xl p-3`}
    >
      {children}
    </Pressable>
  );
};
