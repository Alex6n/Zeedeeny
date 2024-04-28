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
import { ProviderPage } from "../Browser/ProviderPage";
import { Booking } from "../Browser/Booking";

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
      {items.some((item) => item.title === selected) && <ItemPage />}
      {selected === "ملف مقدمة الخدمة" && <ProviderPage />}
      {selected === "حجز موعد" && <Booking />}
      {selected === "الأقسام" && <Categories />}
      {selected === "المحادثات" && <Chats />}
      {selected === "الحساب" && <AccountInfo />}
      {selected === "المزيد" && <More />}
      <NavMenu />
    </>
  );
};

export default AppView;
