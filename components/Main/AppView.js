import { useSelected } from "../../lib/selectedContext";
import Header from "./Header";
import Home from "../Browser/Home";
import NavMenu from "./NavMenu";
import Categories from "../Categories/Categories";
import { Chats } from "../Messages/Chats";

const AppView = () => {
  const { selected } = useSelected();

  return (
    <>
      <Header />
      {selected === "الرئيسية" && <Home />}
      {selected === "الأقسام" && <Categories />}
      {selected === "المحادثات" && <Chats />}
      <NavMenu />
    </>
  );
};

export default AppView;
