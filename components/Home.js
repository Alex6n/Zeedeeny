import LocationSelector from "./LocationSelector";
import ListContainer from "./ListContainer";
import ListItem from "./ListItem";

const Home = () => {
  return (
    <>
      <LocationSelector />
      <ListContainer>
        <ListItem
          key={1}
          title="خدمة البدي كير لليدين"
          descreption="توفر هذه الخدمة العناية باليدين (تقليم الأظافر وطلائها)"
          provider="سارة الثقفي"
          price="210"
          offer="30%"
          image={require("../assets/example.jpeg")}
          rating={4}
        />
        <ListItem
          key={2}
          title="شسوار الشعر"
          descreption="تقدم هذه الخدمة سشوار للشعر"
          provider="سمية الزهراني"
          price="120"
          rating={2.3}
        />
      </ListContainer>
    </>
  );
};

export default Home;
