import LocationSelector from "./LocationSelector";
import ListContainer from "../Main/ListContainer";
import ListItem from "./ListItem";
import { useLocation } from "../../lib/locationContext";
import { useSelected } from "../../lib/selectedContext";
import { useItems } from "../../lib/ItemsContext";

// TODO: Add filter prompt
// TODO: Add page for product or shop
// TODO: Reserve option dialog

// TODO: Add Provider Page

const Home = () => {
  const { location } = useLocation();
  const { selected } = useSelected();
  const { items } = useItems();

  return (
    <>
      <LocationSelector />
      <ListContainer>
        {items
          .filter((item) =>
            location === "نجيكِ"
              ? item.type === "provider"
              : item.type === "shop"
          )
          .filter((item) =>
            selected !== "الرئيسية" ? item.category === selected : item
          )
          .map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              descreption={item.descreption}
              image={item.image}
              offer={item.offer ? item.offer : false}
              provider={item.provider}
              liked={item.liked}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </ListContainer>
    </>
  );
};

export default Home;
