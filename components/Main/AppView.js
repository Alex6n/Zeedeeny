import { useSelected } from "../../lib/selectedContext";
import Header from "./Header";
import Home from "../Browser/Home";
import NavMenu from "./NavMenu";
import Categories from "../Categories/Categories";
import { Chats } from "../Messages/Chats";
import { AccountInfo } from "../Account/AccountInfo";
import { More } from "../More/More";
import { ItemPage } from "../Browser/ItemPage";
import { useItems } from "../../lib/ItemsContext";

const AppView = () => {
  const { selected } = useSelected();
  const { items } = useItems();

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
      {items.includes(selected) && <ItemPage />}
      {selected === "الأقسام" && <Categories />}
      {selected === "المحادثات" && <Chats />}
      {selected === "الحساب" && <AccountInfo />}
      {selected === "المزيد" && <More />}
      <NavMenu />
    </>
  );
};

export default AppView;
