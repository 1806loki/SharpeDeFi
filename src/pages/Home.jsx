import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutUs from "../components/home/AboutUs";
import Blog from "../components/Home/Blog";
import Feature from "../components/Home/Feature";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Testimonial from "../components/Home/Testimonial";

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
