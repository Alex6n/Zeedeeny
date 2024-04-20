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

  let Browser = [
    "العناية بالشعر",
    "إزالة الشعر",
    "قص الشعر",
    "الاستشوار",
    "المكياج",
    "صبغ الشعر",
    "العناية بالجسم",
    "تدليك",
    "الخياطة",
    "الرئيسية",
  ];

  return (
    <>
      <Header />
      {Browser.includes(selected) && <Home />}
      {selected === "الأقسام" && <Categories />}
      {selected === "المحادثات" && <Chats />}
      {selected === "الحساب" && <AccountInfo />}
      {selected === "المزيد" && <More />}
      <NavMenu />
    </>
  );
};

export default AppView;
