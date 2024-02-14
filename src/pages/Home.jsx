import Blog from "../components/home/Blog";
import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonial from "../components/home/Testimonial";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Stats />
      <Blog />
      <Testimonial />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
