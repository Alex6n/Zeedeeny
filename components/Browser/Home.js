import LocationSelector from "./LocationSelector";
import ListContainer from "../Main/ListContainer";
import ListItem from "./ListItem";
import { useLocation } from "../../lib/locationContext";
import { useSelected } from "../../lib/selectedContext";

// TODO: Add filter prompt
// TODO: Add page for product or shop
// TODO: Reserve option dialog

// TODO: Add Provider Page

const providersList = [
  {
    title: "خدمة العناية بالشعر الكيرلي",
    descreption: "توفر هذه الخدمة العناية بالشعر الكيرلي",
    provider: "سارة الثقفي",
    price: "120",
    category: "العناية بالشعر",
    image: require("../../assets/wellaproblogcurlyhaircareimage1.jpg"),
    rating: 4,
    type: "provider",
  },
  {
    title: "خدمة استشوار الشعر",
    descreption: "توفر هذه الخدمة استشوار الشعر",
    provider: "خديجة عامر",
    offer: "10%",
    price: "60",
    category: "الاستشوار",
    image: require("../../assets/Blow-Dry-.jpg"),
    rating: 3,
    type: "provider",
  },
  {
    title: "خدمة قص الشعر",
    descreption: "توفر هذه الخدمة قص الشعر",
    provider: "أميرة القحطاني",
    price: "90",
    category: "قص الشعر",
    image: require("../../assets/image-80.png"),
    rating: 3,
    type: "provider",
  },
  {
    title: "خدمة إزالة الشعر",
    descreption: "توفر هذه الخدمة إزالة شعر الجسم بالشمع",
    provider: "أريج العتيبي",
    price: "130",
    offer: "25%",
    category: "إزالة الشعر",
    image: require("../../assets/hair-de2fe0f99.jpg"),
    rating: 4,
    type: "provider",
  },
  {
    title: "خدمة العناية بالشعر الطويل",
    descreption: "توفر هذه الخدمة العناية بالشعر الطويل",
    provider: "فاطمة الطويل",
    price: "210",
    offer: "30%",
    category: "العناية بالشعر",
    image: require("../../assets/hair-growth.jpg"),
    rating: 4,
    type: "provider",
  },
  {
    title: "خدمة استشوار الشعر الكيرلي",
    descreption: "توفر هذه الخدمة استشوار الشعر الكيرلي",
    provider: "خديجة عامر",
    price: "100",
    category: "الاستشوار",
    image: require("../../assets/intro-1663610670.jpg"),
    rating: 4,
    type: "provider",
  },
  {
    title: "خدمة قص الشعر",
    descreption: "توفر هذه الخدمة قص الشعر",
    provider: "سارة الثقفي",
    price: "50",
    category: "قص الشعر",
    image: require("../../assets/ddc38ec4d9b3b0815115364a7367d444.jpg"),
    rating: 2,
    type: "provider",
  },
  {
    title: "خدمة الواكس البرازيلي",
    descreption: "توفر هذه الخدمة إزالة شعر الجسم بالشمع",
    provider: "أريج العتيبي",
    price: "200",
    category: "إزالة الشعر",
    image: require("../../assets/GettyImagdc84630e.jpg"),
    rating: 5,
    type: "provider",
  },
  {
    title: "خدمة العناية بالشعر",
    descreption: "توفر هذه الخدمة العناية بالشعر",
    provider: "ريم صالح",
    price: "180",
    category: "العناية بالشعر",
    image: require("../../assets/01_Haircare_.jpg"),
    rating: 3,
    type: "provider",
  },
  {
    title: "خدمة إزالة الشعر بالليزر",
    descreption: "توفر هذه الخدمة إزالة شعر الجسم بالليزر",
    provider: "حورية سطام",
    price: "310",
    category: "إزالة الشعر",
    image: require("../../assets/images.jpeg"),
    rating: 5,
    type: "provider",
  },
  {
    title: "حمام شعر",
    descreption: "توفر هذه الخدمة حمام شعر",
    provider: "لطيفة الغامدي",
    price: "80",
    offer: "10%",
    category: "العناية بالشعر",
    image: require("../../assets/example.jpeg"),
    rating: 2,
    type: "provider",
  },
  {
    title: "مركز",
    descreption: "وصف",
    provider: "مركز",
    price: "20",
    category: "العناية بالشعر",
    rating: 0,
    type: "shop",
  },
];

const Home = () => {
  const { location } = useLocation();
  const { selected } = useSelected();

  return (
    <>
      <LocationSelector />
      <ListContainer>
        {providersList
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
              price={item.price}
              rating={item.rating}
            />
          ))}
      </ListContainer>
    </>
  );
};

export default Home;
