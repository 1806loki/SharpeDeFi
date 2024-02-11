import AboutUs from "../components/Home/AboutUs";
import Blog from "../components/Home/Blog";
import Feature from "../components/Home/Feature";
import { Footer } from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Stats />
      <Blog />
      <Testimonial />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
