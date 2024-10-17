import ClientsCarousel from "./Clientslide";
import Expertice from "./Expertice";
import IconSet from "./IconSet";
import  { useState, useEffect } from 'react';
import ItemList from "./Team";
import ContactForm from "./contact";
import NavBar from "./Navbar";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <NavBar className={isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} />
      <IconSet />
      <ClientsCarousel />
      <Expertice />
    
      <ItemList />
      <ContactForm />
    </div>
  );
};

export default Home;