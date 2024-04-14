import ListContainer from "../Main/ListContainer";
import { ChatItem } from "./ChatItem";

export const Chats = () => {
  return (
    <ListContainer classNames="mt-[88px]">
      <ChatItem
        author="رويدة الحداد"
        image={require("../../assets/users/user-1.png")}
        provider
        lastMessage="انتِ : نقدر نأجلها بكرة؟"
        lastMessageTime="11:20 PM"
      />
      <ChatItem
        author="أسماء الجوهري"
        lastMessage="انتِ : وش رايك بخدماتها؟"
        lastMessageTime="10:20 PM"
        read
      />
    </ListContainer>
  );
};
