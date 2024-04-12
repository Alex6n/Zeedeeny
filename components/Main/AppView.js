import { useSelected } from "../../lib/selectedContext";
import Header from "./Header";
import Home from "../Browser/Home";
import NavMenu from "./NavMenu";

const AppView = () => {
  const { selected } = useSelected();

  return (
    <>
      <Header />
      {selected === "الرئيسية" && <Home />}
      <NavMenu />
    </>
  );
};

export default AppView;
