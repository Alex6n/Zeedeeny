import { Pressable } from "react-native";
import { useSelected } from "../../lib/selectedContext";

export const NavItem = ({ section, children, classNames }) => {
  const { selected, setSelected } = useSelected();

  return (
    <Pressable
      onPress={() => setSelected(section)}
      className={`${
        selected === section ? "bg-primary-700/40" : ""
      } ${classNames} rounded-full p-3`}
    >
      {children}
    </Pressable>
  );
};
