import LocationSelector from "./LocationSelector";
import ListContainer from "../Main/ListContainer";
import ListItem from "./ListItem";

// TODO: Add data
// TODO: Apply location selector
// TODO: Add filter prompt
// TODO: filter through categories
// TODO: Add page for product or shop
// TODO: Reserve option dialog

// TODO: Add Provider Page

const providersList = [
  {
    title: "خدمة العناية بالشعر الكيرلي",
    descreption: "توفر هذه الخدمة العناية بالشعر الكيرلي",
    provider: "سارة الثقفي",
    price: "120",
    category: "hair_care",
    image: require("../../assets/wellaproblogcurlyhaircareimage1.jpg"),
    rating: 4,
  },
  {
    title: "خدمة استشوار الشعر",
    descreption: "توفر هذه الخدمة استشوار الشعر",
    provider: "خديجة عامر",
    offer: "10%",
    price: "60",
    category: "hair_dry",
    image: require("../../assets/Blow-Dry-.jpg"),
    rating: 3,
  },
  {
    title: "خدمة قص الشعر",
    descreption: "توفر هذه الخدمة قص الشعر",
    provider: "أميرة القحطاني",
    price: "90",
    category: "hair_cut",
    image: require("../../assets/image-80.png"),
    rating: 3,
  },
  {
    title: "خدمة إزالة الشعر",
    descreption: "توفر هذه الخدمة إزالة شعر الجسم بالشمع",
    provider: "أريج العتيبي",
    price: "130",
    offer: "25%",
    category: "hair_removal",
    image: require("../../assets/hair-de2fe0f99.jpg"),
    rating: 4,
  },
  {
    title: "خدمة العناية بالشعر الطويل",
    descreption: "توفر هذه الخدمة العناية بالشعر الطويل",
    provider: "فاطمة الطويل",
    price: "210",
    offer: "30%",
    category: "hair_care",
    image: require("../../assets/hair-growth.jpg"),
    rating: 4,
  },
  {
    title: "خدمة استشوار الشعر الكيرلي",
    descreption: "توفر هذه الخدمة استشوار الشعر الكيرلي",
    provider: "خديجة عامر",
    price: "100",
    category: "hair_dry",
    image: require("../../assets/intro-1663610670.jpg"),
    rating: 4,
  },
  {
    title: "خدمة قص الشعر",
    descreption: "توفر هذه الخدمة قص الشعر",
    provider: "سارة الثقفي",
    price: "50",
    category: "hair_cut",
    image: require("../../assets/ddc38ec4d9b3b0815115364a7367d444.jpg"),
    rating: 2,
  },
  {
    title: "خدمة الواكس البرازيلي",
    descreption: "توفر هذه الخدمة إزالة شعر الجسم بالشمع",
    provider: "أريج العتيبي",
    price: "200",
    category: "hair_removal",
    image: require("../../assets/GettyImagdc84630e.jpg"),
    rating: 5,
  },
  {
    title: "خدمة العناية بالشعر",
    descreption: "توفر هذه الخدمة العناية بالشعر",
    provider: "ريم صالح",
    price: "180",
    category: "hair_care",
    image: require("../../assets/01_Haircare_.jpg"),
    rating: 3,
  },
  {
    title: "خدمة إزالة الشعر بالليزر",
    descreption: "توفر هذه الخدمة إزالة شعر الجسم بالليزر",
    provider: "حورية سطام",
    price: "310",
    category: "hair_removal",
    image: require("../../assets/images.jpeg"),
    rating: 5,
  },
  {
    title: "حمام شعر",
    descreption: "توفر هذه الخدمة حمام شعر",
    provider: "لطيفة الغامدي",
    price: "80",
    offer: "10%",
    category: "hair_care",
    image: require("../../assets/example.jpeg"),
    rating: 2,
  },
];

const Home = () => {
  return (
    <>
      <LocationSelector />
      <ListContainer>
        {providersList.map((item, index) => (
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
