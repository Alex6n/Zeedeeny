import { useSelected } from "../../lib/selectedContext";
import Header from "./Header";
import Home from "../Browser/Home";
import NavMenu from "./NavMenu";
import Categories from "../Categories/Categories";
import { Chats } from "../Messages/Chats";
import { AccountInfo } from "../Account/AccountInfo";
import { More } from "../More/More";

const AppView = () => {
  const { selected } = useSelected();

  return (
    <>
      <Header />
      {selected === "الرئيسية" && <Home />}
      {selected === "الأقسام" && <Categories />}
      {selected === "المحادثات" && <Chats />}
      {selected === "الحساب" && <AccountInfo />}
      {selected === "المزيد" && <More />}
      <NavMenu />
    </>
  );
};

export default AppView;
