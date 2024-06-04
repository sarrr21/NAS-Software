import ClientsCarousel from "./Clientslide";
import Expertice from "./Expertice";
import IconSet from "./IconSet";
import Showcase from "./ShowCase";
import ItemList from "./Team";
import ContactForm from "./contact";

const Home = () => {
  
return (
    <div>
      <IconSet />
      <ClientsCarousel />
      <Expertice />
      <Showcase />
      <ItemList />
      <ContactForm />
    </div>
  );
};

export default Home;