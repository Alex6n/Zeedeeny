import { useSelected } from "../../lib/selectedContext";
import Header from "./Header";
import Home from "../Browser/Home";
import NavMenu from "./NavMenu";
import Categories from "../Categories/Categories";

const AppView = () => {
  const { selected } = useSelected();

  return (
    <>
      <Header />
      {selected === "الرئيسية" && <Home />}
      {selected === "الأقسام" && <Categories />}
      <NavMenu />
    </>
  );
};

export default AppView;
