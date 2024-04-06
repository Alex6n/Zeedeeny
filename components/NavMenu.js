import { View } from "react-native";
import { Grip, MessageSquare, Home, User, Ellipsis } from "lucide-react-native";
import { NavItem } from "./NavItem";

export default function NavMenu() {
  return (
    <View className="flex flex-row justify-evenly px-3 items-center border-t-[2px] border-gray-300/50 absolute bottom-0 w-full h-[53px] mb-2 pt-2">
      <NavItem section="المزيد">
        <Ellipsis className="w-4 h-4 text-gray-400" />
      </NavItem>
      <NavItem section="الأقسام">
        <Grip className="w-4 h-4 text-gray-400" />
      </NavItem>
      <NavItem section="الرئيسية">
        <Home className="w-4 h-4 text-gray-400" />
      </NavItem>
      <NavItem section="المحادثات">
        <MessageSquare className="w-4 h-4 text-gray-400" />
      </NavItem>
      <NavItem section="الحساب">
        <User className="w-4 h-4 text-gray-400" />
      </NavItem>
    </View>
  );
}
