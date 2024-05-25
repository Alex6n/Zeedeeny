import { View } from "react-native";
import {
  Grip,
  MessageSquare,
  Home,
  User,
  Ellipsis,
  Star,
  Search,
} from "lucide-react-native";
import { NavItem } from "./NavItem";

export default function NavMenu() {
  return (
    <View className="flex flex-row justify-evenly px-3 items-center border-t-[1px] border-accent-800 absolute bottom-0 w-full h-[53px] mb-2 pt-2">
      <NavItem section="المزيد">
        <Ellipsis className="w-4 h-4 text-text-100/70" />
      </NavItem>
      <NavItem section="الأقسام">
        <Search className="w-4 h-4 text-text-100/70" />
      </NavItem>
      <NavItem section="الرئيسية" classNames="p-10">
        <Home className="w-8 h-8 text-text-100/70" />
      </NavItem>
      <NavItem section="المحادثات">
        <MessageSquare className="w-4 h-4 text-text-100/70" />
      </NavItem>
      <NavItem section="الحساب">
        <User className="w-4 h-4 text-text-100/70" />
      </NavItem>
    </View>
  );
}
